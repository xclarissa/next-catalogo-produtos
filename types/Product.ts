interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
}

export type { Product }