import { ImageSource } from "yet-another-react-lightbox/*";

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  srcSet?: ImageSource[];
}
