import { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  cart: CartItem[];
  total: number;
  onClose: () => void;
  onSuccess: () => void;
}

type Mode = 'livraison' | 'boutique';
type Paiement = 'mobile_money' | 'wave' | 'carte';
type Step = 'mode' | 'infos' | 'confirmation';

export default function CheckoutModal({ cart, total, onClose, onSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState<Step>('mode');
  const [mode, setMode] = useState<Mode | null>(null);
  const [paiement, setPaiement] = useState<Paiement | null>(null);
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    quartier: '',
    commune: '',
    indication: '',
    numeroMobile: '',
    numeroCarte: '',
    expiration: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canContinueStep1 = mode !== null;

  const canContinueStep2 = () => {
    if (!form.nom || !form.prenom || !form.telephone) return false;
    if (mode === 'livraison') {
      if (!form.quartier || !form.commune || !paiement) return false;
      if (paiement === 'mobile_money' && !form.numeroMobile) return false;
      if (paiement === 'wave' && !form.numeroMobile) return false;
      if (paiement === 'carte' && (!form.numeroCarte || !form.expiration || !form.cvv)) return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const paiementLabels: Record<Paiement, string> = {
    mobile_money: 'Mobile Money (MTN / Moov)',
    wave: 'Wave',
    carte: 'Carte bancaire',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#662482] to-[#E5007E] px-7 py-5 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-white font-black text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {step === 'mode' && 'Mode d\'achat'}
              {step === 'infos' && 'Vos coordonnées'}
              {step === 'confirmation' && 'Commande confirmée !'}
            </h2>
            {step !== 'confirmation' && (
              <p className="text-white/70 text-xs mt-0.5">
                Étape {step === 'mode' ? '1' : '2'} / 2
              </p>
            )}
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {step !== 'confirmation' && (
          <div className="h-1 bg-gray-100 shrink-0">
            <div
              className="h-full bg-[#E5007E] transition-all duration-500"
              style={{ width: step === 'mode' ? '50%' : '100%' }}
            />
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-7 py-6">

          {/* ── STEP 1 : Mode d'achat ── */}
          {step === 'mode' && (
            <div>
              <p className="text-sm text-gray-500 mb-6">
                Comment souhaitez-vous recevoir votre commande ?
              </p>

              {/* Order recap */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Récapitulatif</p>
                {cart.map(item => (
                  <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-3 mb-2">
                    <img src={item.product.image} alt={item.product.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate">{item.product.name}</p>
                      <p className="text-[10px] text-gray-400">T{item.size} · ×{item.quantity}</p>
                    </div>
                    <p className="text-xs font-bold text-[#662482]">
                      {(item.product.price * item.quantity).toLocaleString('fr-FR')} CFA
                    </p>
                  </div>
                ))}
                <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between">
                  <span className="text-sm font-bold text-gray-700">Total</span>
                  <span className="text-sm font-black text-[#662482]">{total.toLocaleString('fr-FR')} CFA</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setMode('livraison')}
                  className={`rounded-2xl border-2 p-5 text-left transition-all duration-200 hover:shadow-md ${
                    mode === 'livraison'
                      ? 'border-[#662482] bg-[#662482]/5'
                      : 'border-gray-200 hover:border-[#C298D8]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${mode === 'livraison' ? 'bg-[#662482]' : 'bg-gray-100'}`}>
                    <svg className={`w-5 h-5 ${mode === 'livraison' ? 'text-white' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <p className={`font-bold text-sm ${mode === 'livraison' ? 'text-[#662482]' : 'text-gray-800'}`}>
                    Livraison
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Reçevez votre commande à domicile à Abidjan
                  </p>
                  {mode === 'livraison' && (
                    <div className="mt-2 flex items-center gap-1 text-[#662482]">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-semibold">Sélectionné</span>
                    </div>
                  )}
                </button>

                <button
                  onClick={() => setMode('boutique')}
                  className={`rounded-2xl border-2 p-5 text-left transition-all duration-200 hover:shadow-md ${
                    mode === 'boutique'
                      ? 'border-[#E5007E] bg-[#E5007E]/5'
                      : 'border-gray-200 hover:border-[#C298D8]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${mode === 'boutique' ? 'bg-[#E5007E]' : 'bg-gray-100'}`}>
                    <svg className={`w-5 h-5 ${mode === 'boutique' ? 'text-white' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                    </svg>
                  </div>
                  <p className={`font-bold text-sm ${mode === 'boutique' ? 'text-[#E5007E]' : 'text-gray-800'}`}>
                    Passage en boutique
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Retirez en boutique · Yopougon, Sideci-Lem
                  </p>
                  {mode === 'boutique' && (
                    <div className="mt-2 flex items-center gap-1 text-[#E5007E]">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-semibold">Sélectionné</span>
                    </div>
                  )}
                </button>
              </div>

              {mode === 'boutique' && (
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-700">
                  <p className="font-semibold mb-1">📍 Adresse boutique</p>
                  <p>Yopougon, Sideci-Lem, Abidjan</p>
                  <p className="mt-1 text-amber-600">Lun–Ven : 08h–20h · Sam : 09h–18h</p>
                </div>
              )}
            </div>
          )}

          {/* ── STEP 2 : Infos + paiement ── */}
          {step === 'infos' && (
            <form id="checkout-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Coordonnées */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-3">Vos coordonnées</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Nom *</label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Koné"
                      required
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Prénom *</label>
                    <input
                      name="prenom"
                      value={form.prenom}
                      onChange={handleChange}
                      placeholder="Awa"
                      required
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Téléphone *</label>
                    <input
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="+225 07 XX XX XX XX"
                      required
                      type="tel"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="vous@email.com"
                      type="email"
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Livraison fields */}
              {mode === 'livraison' && (
                <>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-3">Lieu de livraison</p>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Commune *</label>
                        <select
                          name="commune"
                          value={form.commune}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors bg-white"
                        >
                          <option value="">Sélectionner</option>
                          {['Yopougon', 'Cocody', 'Plateau', 'Adjamé', 'Abobo', 'Attécoubé', 'Koumassi', 'Marcory', 'Port-Bouët', 'Treichville', 'Bingerville'].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">Quartier *</label>
                        <input
                          name="quartier"
                          value={form.quartier}
                          onChange={handleChange}
                          placeholder="ex : Sideci-Lem, Niangon..."
                          required
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 mb-1 block">Indication complémentaire</label>
                      <input
                        name="indication"
                        value={form.indication}
                        onChange={handleChange}
                        placeholder="ex : Près du marché, face à l'école..."
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Payment method */}
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[3px] mb-3">Moyen de paiement</p>
                    <div className="flex flex-col gap-2 mb-4">
                      {([
                        { key: 'mobile_money', label: 'Mobile Money', sub: 'MTN Money · Moov Money' },
                        { key: 'wave', label: 'Wave', sub: 'Transfert instantané' },
                        { key: 'carte', label: 'Carte bancaire', sub: 'Visa · Mastercard' },
                      ] as { key: Paiement; label: string; sub: string }[]).map(({ key, label, sub }) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setPaiement(key)}
                          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all ${
                            paiement === key
                              ? 'border-[#662482] bg-[#662482]/5'
                              : 'border-gray-200 hover:border-[#C298D8]'
                          }`}
                        >
                          <div className="flex-1">
                            <p className={`text-sm font-semibold ${paiement === key ? 'text-[#662482]' : 'text-gray-800'}`}>{label}</p>
                            <p className="text-xs text-gray-400">{sub}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paiement === key ? 'border-[#662482]' : 'border-gray-300'}`}>
                            {paiement === key && <div className="w-2.5 h-2.5 rounded-full bg-[#662482]" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Mobile Money / Wave fields */}
                    {(paiement === 'mobile_money' || paiement === 'wave') && (
                      <div>
                        <label className="text-xs font-semibold text-gray-500 mb-1 block">
                          Numéro {paiement === 'wave' ? 'Wave' : 'Mobile Money'} *
                        </label>
                        <input
                          name="numeroMobile"
                          value={form.numeroMobile}
                          onChange={handleChange}
                          placeholder="+225 07 XX XX XX XX"
                          required
                          type="tel"
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors"
                        />
                        <p className="text-xs text-gray-400 mt-1.5">
                          Un message de confirmation vous sera envoyé sur ce numéro.
                        </p>
                      </div>
                    )}

                    {/* Carte bancaire fields */}
                    {paiement === 'carte' && (
                      <div className="flex flex-col gap-3">
                        <div>
                          <label className="text-xs font-semibold text-gray-500 mb-1 block">Numéro de carte *</label>
                          <input
                            name="numeroCarte"
                            value={form.numeroCarte}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            required
                            maxLength={19}
                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors font-mono tracking-wider"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-semibold text-gray-500 mb-1 block">Expiration *</label>
                            <input
                              name="expiration"
                              value={form.expiration}
                              onChange={handleChange}
                              placeholder="MM/AA"
                              required
                              maxLength={5}
                              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors font-mono"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-gray-500 mb-1 block">CVV *</label>
                            <input
                              name="cvv"
                              value={form.cvv}
                              onChange={handleChange}
                              placeholder="123"
                              required
                              maxLength={4}
                              type="password"
                              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#662482] transition-colors font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Boutique info */}
              {mode === 'boutique' && (
                <div className="border-t border-gray-100 pt-5">
                  <div className="bg-[#662482]/5 border border-[#662482]/20 rounded-2xl p-4 text-sm">
                    <p className="font-semibold text-[#662482] mb-2">ℹ️ Retrait en boutique</p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Votre commande sera réservée. Vous paierez à la caisse lors de votre passage
                      en boutique à <strong>Yopougon, Sideci-Lem</strong>. Nous vous contacterons
                      sur votre numéro de téléphone pour confirmer la disponibilité.
                    </p>
                  </div>
                </div>
              )}
            </form>
          )}

          {/* ── CONFIRMATION ── */}
          {step === 'confirmation' && (
            <div className="text-center py-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Commande reçue !
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {mode === 'livraison'
                  ? `Merci ${form.prenom} ! Votre commande est enregistrée. Nous vous contactons au ${form.telephone} pour confirmer la livraison à ${form.quartier}, ${form.commune}.`
                  : `Merci ${form.prenom} ! Votre commande est réservée. Nous vous contactons au ${form.telephone} pour confirmer votre passage en boutique.`}
              </p>

              {/* Summary */}
              <div className="bg-gray-50 rounded-2xl p-4 text-left mb-6 border border-gray-100">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Mode</span>
                  <span className="font-semibold text-gray-800">
                    {mode === 'livraison' ? '🚚 Livraison' : '🏪 Retrait boutique'}
                  </span>
                </div>
                {mode === 'livraison' && paiement && (
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Paiement</span>
                    <span className="font-semibold text-gray-800">{paiementLabels[paiement]}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total</span>
                  <span className="font-black text-[#662482]">{total.toLocaleString('fr-FR')} CFA</span>
                </div>
              </div>

              <button
                onClick={onSuccess}
                className="w-full bg-[#662482] hover:bg-[#E5007E] text-white font-bold py-3.5 rounded-2xl transition-colors duration-200"
              >
                Retour à l'accueil
              </button>
            </div>
          )}
        </div>

        {/* Footer actions */}
        {step !== 'confirmation' && (
          <div className="px-7 py-5 border-t border-gray-100 shrink-0 flex gap-3">
            {step === 'infos' && (
              <button
                type="button"
                onClick={() => setStep('mode')}
                className="flex-1 border-2 border-gray-200 text-gray-600 hover:border-[#662482] hover:text-[#662482] font-semibold py-3 rounded-2xl transition-all duration-200 text-sm"
              >
                ← Retour
              </button>
            )}
            {step === 'mode' && (
              <button
                type="button"
                onClick={() => setStep('infos')}
                disabled={!canContinueStep1}
                className="flex-1 bg-[#662482] hover:bg-[#E5007E] disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-bold py-3 rounded-2xl transition-all duration-200 text-sm"
              >
                Continuer →
              </button>
            )}
            {step === 'infos' && (
              <button
                type="submit"
                form="checkout-form"
                disabled={!canContinueStep2()}
                className="flex-1 bg-[#E5007E] hover:bg-[#c4006c] disabled:bg-gray-200 disabled:cursor-not-allowed text-white font-bold py-3 rounded-2xl transition-all duration-200 text-sm"
              >
                Confirmer la commande
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
