export interface Poster {
  id: number;
  name: string;
  description: string;
  image: string;
  slug: string;
  price: string;
  genres: { title: string }[];
}

export interface Genre {
  id: number;
  title: string;
  slug: string;
}

export interface Cartline {
  id: number;
  userId: number;
  posterId: number;
  quantity: number;
  poster: {
    name: string;
    image: string;
    price: string;
    slug: string;
  };
}
