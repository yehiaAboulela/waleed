export interface Unit {
  id: number;
  details: string;
  price: string;
  address: string;
  region: string;
  university: string;
  transportations: Transportation[];
  images: Image[];
}

export interface Transportation {
  address: string;
  date: string;
  price: number;
}

export interface Image {
  URL: string;
}
