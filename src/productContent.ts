import { Product } from './types';

type Kind = 'sneaker' | 'escarpin' | 'sandale' | 'mocassin' | 'ville' | 'boot' | 'kidsSneaker' | 'kidsSandale' | 'kidsBoot';

interface Pool {
  reviews: string[];
  about: string[];
  bullets: string[][];
}

const POOLS: Record<Kind, Pool> = {
  sneaker: {
    reviews: [
      'Je la porte du matin au soir, aucun point de pression. La semelle amortit vraiment bien, même après une longue journée de marche.',
      'Elle va avec tout : jean, robe, jogging. J\'ai déjà eu trois compliments au bureau cette semaine.',
      'La semelle est épaisse mais légère, on ne sent pas le poids. Parfaite pour le quotidien à Abidjan.',
      'Les couleurs sont encore plus belles en vrai. Le blanc reste propre avec un simple coup d\'éponge.',
      'Taille normalement, j\'ai pris ma pointure habituelle. Maintien correct de la cheville, lacets de bonne qualité.',
      'Un peu ferme les deux premiers jours, puis elle s\'assouplit et devient ultra confortable. Je recommande.',
    ],
    about: [
      'Pensée pour la ville, cette sneaker combine une tige respirante et une semelle amortissante pour rester à l\'aise toute la journée.',
      'Un look sportif et affirmé, avec un laçage précis et une semelle qui accroche sur tous les sols.',
      'Une paire streetwear facile à assortir : elle donne du relief à une tenue simple sans jamais en faire trop.',
    ],
    bullets: [
      ['Semelle amortissante pour la marche', 'Tige respirante et légère', 'Laçage ajustable pour un bon maintien'],
      ['Semelle crantée antidérapante', 'Look sportif facile à assortir', 'Entretien simple à l\'éponge humide'],
      ['Intérieur confortable dès le premier port', 'Coutures renforcées', 'Silhouette streetwear actuelle'],
    ],
  },
  escarpin: {
    reviews: [
      'Élégante sans être douloureuse : j\'ai tenu tout un mariage sans les enlever. Le talon est bien équilibré.',
      'La finition est impeccable et la forme allonge la jambe. Parfaite pour le bureau comme pour une soirée.',
      'Le talon est stable et la semelle intérieure bien rembourrée. Je n\'ai eu aucune ampoule.',
      'Très chic, on me demande où je les ai trouvées. Elles taillent un poil petit, prenez une pointure au-dessus si vous hésitez.',
      'La bride tient bien le pied, on peut marcher naturellement. Un vrai coup de cœur pour mes tenues de cérémonie.',
      'Le rendu est luxueux pour le prix. Je les ai portées avec une robe longue, l\'effet est magnifique.',
    ],
    about: [
      'Un escarpin de caractère, à la ligne fine, conçu pour sublimer une tenue de soirée comme un look de bureau.',
      'Le talon est travaillé pour allier hauteur et stabilité, avec une semelle intérieure matelassée qui soulage l\'avant-pied.',
      'Une pièce raffinée aux finitions soignées, qui apporte une touche de sophistication à chaque occasion.',
    ],
    bullets: [
      ['Talon stable et bien équilibré', 'Semelle intérieure matelassée', 'Ligne fine qui allonge la jambe'],
      ['Finitions soignées', 'Bride ou maintien arrière sécurisé', 'Idéale cérémonies et soirées'],
      ['Bout travaillé pour plus de confort', 'Semelle extérieure antidérapante', 'Se marie avec robes et tailleurs'],
    ],
  },
  sandale: {
    reviews: [
      'Légères et très faciles à enfiler. Les brides ne frottent pas, même sans chaussettes ni pansements.',
      'Parfaites pour la chaleur d\'Abidjan : le pied respire et elles restent stables toute la journée.',
      'Les détails brillants sont magnifiques à la lumière. Je les ai portées pour un baptême, un succès total.',
      'La bride de cheville est réglable, ça tient parfaitement. Le talon est plus confortable que prévu.',
      'Semelle souple, on marche des heures sans fatigue. Je vais commander une deuxième couleur.',
      'Jolie finition, elles sont aussi belles que sur la photo. Attention, elles chaussent plutôt juste.',
    ],
    about: [
      'Une sandale aérée aux brides soignées, pensée pour les journées chaudes et les soirées d\'été.',
      'Le pied est bien tenu par des brides ajustées, avec une semelle souple qui accompagne chaque pas.',
      'Un modèle ouvert qui joue sur les détails et les matières pour habiller la tenue la plus simple.',
    ],
    bullets: [
      ['Brides ajustées sans frottement', 'Semelle souple et légère', 'Parfaite pour les journées chaudes'],
      ['Bout ouvert qui laisse respirer le pied', 'Détails de finition soignés', 'Se glisse facilement dans le sac'],
      ['Fermeture réglable à la cheville', 'Semelle antidérapante', 'Look estival et habillé'],
    ],
  },
  mocassin: {
    reviews: [
      'Facile à enfiler, souple dès le premier jour. Je l\'ai adoptée pour le travail, elle remplace mes ballerines.',
      'Le cuir est agréable et le style intemporel. Elle va aussi bien avec un pantalon qu\'avec une jupe.',
      'La semelle épaisse donne un petit plus de hauteur sans fatigue. Très belle allure, très confortable.',
      'Un modèle chic et décontracté à la fois. Je l\'ai portée toute la journée sans aucune gêne.',
      'La finition est très propre et le talon discret. Je recommande de prendre sa taille habituelle.',
      'Un vrai basique de garde-robe. Elle se nettoie facilement et garde bien sa forme.',
    ],
    about: [
      'Un mocassin à enfiler d\'un geste, dont la ligne épurée convient autant au bureau qu\'aux sorties du week-end.',
      'La semelle structurée apporte stabilité et confort, tandis que la tige souple épouse le pied.',
      'Un classique revisité, qui s\'adapte à tous les styles et reste élégant d\'une saison à l\'autre.',
    ],
    bullets: [
      ['Enfilage rapide sans lacets', 'Tige souple qui épouse le pied', 'Élégante au bureau comme en week-end'],
      ['Semelle structurée pour la stabilité', 'Finitions propres et nettes', 'Entretien facile'],
      ['Ligne épurée intemporelle', 'Confort dès le premier port', 'Se porte avec ou sans chaussettes'],
    ],
  },
  ville: {
    reviews: [
      'Cuir de belle facture et coutures très nettes. Elles ont tout de suite fait leur effet lors de mon entretien.',
      'Un peu rigides au début, puis le cuir se détend et elles deviennent très agréables. Superbes avec un costume.',
      'La semelle est solide et le laçage ferme bien le pied. On sent une chaussure faite pour durer.',
      'Excellent rapport qualité-prix. Je les ai portées pour un mariage, tout le monde a remarqué la couleur.',
      'Le dessin du bout et le cirage naturel sont magnifiques. Un vrai modèle habillé, sobre et raffiné.',
      'Elles chaussent normalement, avec une largeur correcte. Parfaites pour une journée entière au bureau.',
    ],
    about: [
      'Une chaussure de ville au cuir soigné, construite pour accompagner costumes et tenues habillées avec assurance.',
      'Le laçage précis et la semelle solide assurent un maintien irréprochable de l\'entretien à la cérémonie.',
      'Une silhouette classique, retravaillée avec des détails de finition qui font la différence au regard.',
    ],
    bullets: [
      ['Cuir soigné et durable', 'Laçage précis et maintien ferme', 'Semelle solide et résistante'],
      ['Silhouette habillée classique', 'Coutures nettes', 'Cirage possible pour raviver le cuir'],
      ['Confort stable toute la journée', 'Idéale costume et cérémonies', 'Cuir qui s\'assouplit avec le temps'],
    ],
  },
  boot: {
    reviews: [
      'Chaudes sans être lourdes, et la tige se plie bien. Je les porte avec des leggings, très stylé.',
      'La fermeture glisse sans accroc et la tige épouse bien la jambe. Un vrai coup de cœur pour la saison.',
      'La semelle crantée accroche bien quand il pleut. Je me sens en sécurité même sur sol mouillé.',
      'Le cuir est épais mais souple, elles se sont faites au pied en deux jours. Très belle allure.',
      'Look affirmé, confort surprenant. Je prends une pointure standard et elles me vont très bien.',
      'Parfaites avec une robe courte ou un jean. Elles se démarquent sans effort dans la foule.',
    ],
    about: [
      'Une botte à la tige haute et à la silhouette marquée, conçue pour tenir chaud et affirmer le style.',
      'La semelle crantée garantit une bonne accroche, y compris par temps de pluie, tout en restant confortable.',
      'Une pièce forte qui structure la tenue, avec un maintien précis de la cheville et du mollet.',
    ],
    bullets: [
      ['Tige haute qui épouse la jambe', 'Semelle crantée antidérapante', 'Fermeture pratique'],
      ['Maintien précis de la cheville', 'Matière souple et résistante', 'Se porte avec jupe, robe ou jean'],
      ['Doublure confortable', 'Look affirmé toute la saison', 'Entretien facile'],
    ],
  },
  kidsSneaker: {
    reviews: [
      'Mon fils court toute la journée avec et elles tiennent le coup. Très faciles à enfiler pour lui.',
      'Elle a adoré les couleurs ! Légères, souples, et les scratchs tiennent bien à l\'école.',
      'Bon amorti pour les jeux dans la cour. Je recommande de prendre une demi-pointure au-dessus, car il grandit vite.',
      'Solides et lavables. Après deux semaines de récréations, elles ont encore fière allure.',
      'Ma fille ne veut plus les enlever. Confortables dès le premier jour, sans frottement.',
      'Bon rapport qualité-prix pour une paire d\'enfant. La semelle accroche bien sur le carrelage.',
    ],
    about: [
      'Une basket d\'enfant légère et souple, pensée pour courir, sauter et grimper sans jamais gêner le pied.',
      'Les couleurs vives plaisent aux petits, et la fermeture facile leur permet de se chausser seuls.',
      'Une semelle antidérapante et une tige renforcée pour supporter les journées d\'école et de jeux.',
    ],
    bullets: [
      ['Légère et flexible pour courir', 'Fermeture facile à enfiler seul', 'Semelle antidérapante'],
      ['Couleurs vives qui plaisent', 'Tige renforcée résistante', 'Lavable facilement'],
      ['Bon maintien du pied', 'Amorti pour les jeux', 'Idéale école et week-end'],
    ],
  },
  kidsSandale: {
    reviews: [
      'Ma fille les adore pour l\'été. Les brides sont douces, aucune irritation après une journée à la plage.',
      'Faciles à fermer avec l\'attache réglable, et le pied reste bien au sec. Parfaites pour la chaleur.',
      'Résistantes aux jeux d\'eau et au sable. Elles sèchent vite et restent très jolies.',
      'Bien tenues à la cheville, elle peut courir sans les perdre. Je vais en reprendre pour son frère.',
      'Le cuir est souple, la semelle légère. Pointure fidèle, juste un peu juste pour les pieds larges.',
      'Très mignonnes et confortables, avec des finitions soignées pour le prix.',
    ],
    about: [
      'Une sandale d\'enfant aérée et douce pour le pied, idéale pour les jours d\'été, la plage et les vacances.',
      'Les attaches réglables suivent la croissance du pied et se ferment en un instant.',
      'Une semelle souple et un cuir doux pour que les petits pieds restent à l\'aise toute la journée.',
    ],
    bullets: [
      ['Attaches réglables faciles à fermer', 'Cuir doux sans irritation', 'Séchage rapide'],
      ['Pied aéré en été', 'Semelle souple et légère', 'Bon maintien à la cheville'],
      ['Résistante au sable et à l\'eau', 'Finitions soignées', 'Idéale vacances et plage'],
    ],
  },
  kidsBoot: {
    reviews: [
      'Chaudes et faciles à enfiler grâce à la fermeture. Ma fille les porte tous les jours pour l\'école.',
      'Belle finition et semelle qui ne glisse pas. Un vrai plus quand il pleut devant l\'école.',
      'Elles tiennent bien le pied et la cheville. Mon fils court avec sans aucune gêne.',
      'Très jolies avec une robe ou un jean. Elles ont tout de suite plu à ma petite.',
      'Matière souple, pas de frottement au talon. Je recommande de prendre une pointure au-dessus pour l\'hiver.',
      'Bon rapport qualité-prix, elles résistent bien aux jeux de la récréation.',
    ],
    about: [
      'Une bottine d\'enfant qui tient chaud et protège la cheville, avec une fermeture rapide pour gagner du temps le matin.',
      'La semelle antidérapante rassure les parents, et la matière souple évite les frottements.',
      'Un look chic et affirmé pour les petits, sans sacrifier le confort et la liberté de mouvement.',
    ],
    bullets: [
      ['Fermeture rapide', 'Semelle antidérapante', 'Protège et tient la cheville'],
      ['Matière souple sans frottement', 'Look chic pour enfant', 'Résiste aux jeux'],
      ['Chaude sans être lourde', 'Se porte avec jupe ou jean', 'Entretien simple'],
    ],
  },
};

const NAMES = [
  'Aminata K.', 'Kouassi M.', 'Awa D.', 'Fatou T.', 'Yao B.', 'Mariam S.', 'Serge A.', 'Nadège L.',
  'Ibrahim C.', 'Chantal N.', 'Moussa D.', 'Estelle G.', 'Raïssa O.', 'Armand Y.', 'Sonia B.', 'Mamadou F.',
  'Priscille Z.', 'Kader T.', 'Josiane H.', 'Eric K.',
];

function kindOf(p: Product): Kind {
  const n = p.name.toLowerCase();
  const kid = p.category === 'Enfant';
  if (/boot|bottine|botte/.test(n)) return kid ? 'kidsBoot' : 'boot';
  if (/sandale/.test(n)) return kid ? 'kidsSandale' : 'sandale';
  if (kid) return 'kidsSneaker';
  if (/mocassin|loafer|mule|sabot/.test(n)) return 'mocassin';
  if (/oxford|derby|richelieu|wingtip|bicolor noir|spectator/.test(n)) return 'ville';
  if (/escarpin|slingback|peep|heels|aiguille|talon|mary jane/.test(n)) return 'escarpin';
  return p.category === 'Homme' && /cuir/.test(n) ? 'ville' : 'sneaker';
}

export function getProductContent(p: Product) {
  const pool = POOLS[kindOf(p)];
  const pick = <T,>(arr: T[], offset = 0) => arr[(p.id + offset) % arr.length];

  const first = p.id % pool.reviews.length;
  const reviews = [0, 2, 4].map((step, i) => {
    const stars = p.rating >= 4.7 ? (i === 2 ? 4 : 5) : i === 0 ? 5 : 4;
    return {
      name: NAMES[(p.id * 3 + i * 7) % NAMES.length],
      stars,
      text: pool.reviews[(first + step) % pool.reviews.length],
    };
  });

  return {
    reviews,
    about: pick(pool.about, 1),
    bullets: pick(pool.bullets, 2),
  };
}
