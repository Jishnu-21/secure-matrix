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
  tradeInformation?: ProductSpecification[];
  productDetails?: ProductSpecification[];
  shortDescription: string;
  keyFeatures: string[];
  priceUnit?: string;
  imagePath: string[];
  minOrderQuantity?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  features: string[];
  imagePath: string;
  products: Product[];
}
