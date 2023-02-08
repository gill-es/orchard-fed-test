import { Image } from "./image";

export interface Content {
  id: number;
  images: Image[];
  title: string;
  description: string;
}
