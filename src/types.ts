export type Page = 'accueil' | 'offre' | 'panier' | 'apropos' | 'contact' | 'product';
export type Category = 'Tous' | 'Femme' | 'Homme' | 'Enfant';

export interface Product {
  id: number;
  name: string;
  category: 'Femme' | 'Homme' | 'Enfant';
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  tag?: string;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
