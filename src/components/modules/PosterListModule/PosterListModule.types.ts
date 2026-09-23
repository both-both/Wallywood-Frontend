export type PosterProps = {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: string;
};

export type PosterListProps = {
  limit?: number;
  showHeading?: boolean;
};
