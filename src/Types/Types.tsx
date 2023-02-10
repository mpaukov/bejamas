export type Product =
  | {
      name: string;
      category: string;
      price: number;
      currency: string;
      image:
        | {
            src: string;
            alt: string;
          }
        | string;
      bestseller: boolean;
      featured: boolean;
      details: [] | null;
    }
  | {
      name: string;
      category: string;
      price: number;
      currency: string;
      image: {
        src: string;
        alt: string;
      };
      bestseller: boolean;
      featured: boolean;
      details: {
        dimmentions: {
          width: number;
          height: number;
        };
        size: number;
        description: string;
        recommendations: {
          src: string;
          alt: string;
        }[];
      };
    };
