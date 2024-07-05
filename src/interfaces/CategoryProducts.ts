export interface CategoryI {
  categoryName: string;
  description: string;
  id: number;
  imageUrl: string;
  products: ProductI[]
}

export interface ProductI {
  description: string;
  id: number;
  imageURL: string;
  name: string;
  price: number
}