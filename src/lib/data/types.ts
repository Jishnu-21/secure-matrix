export interface ProductSpecification {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features?: string[];
  specifications?: ProductSpecification[];
  price?: string;
  priceUnit?: string;
  minOrderQuantity?: string;
  supplyAbility?: string;
  imagePath: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  features: string[];
  imagePath: string;
  products: Product[];
}
