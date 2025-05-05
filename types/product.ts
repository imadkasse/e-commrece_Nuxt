export interface Product {
  name: string;
  price: number;
  description: string;
  images: string[];
  _id: string;
  category: string;
  availability: boolean;
  reviews: string[];
  avgReviews: number;
  numReview: number;
  totalPurchased: number;
}
