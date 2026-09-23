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
