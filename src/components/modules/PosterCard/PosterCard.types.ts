export type PosterCardProps = {
  id: number;
  name: string;
  price?: string;
  image: string;
  description: string;
  genres: { title: string }[];
};
