import { LatestPageImages } from "../assets/images";
import { Content } from "../interfaces/content";

export const content: Content[] = [
  {
    id: 1,
    images: [
      { src: LatestPageImages.CP2Image01, alt: "Fancy food on a table" },
      { src: LatestPageImages.CP2Image01Retina },
    ],
    title: "Summer Lunch Menu By Mark Best",
    description:
      "AEG ambasssador Mark best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
  },
  {
    id: 2,
    images: [
      { src: LatestPageImages.CP2Image02, alt: "Roast chicken on a table" },
      {
        src: LatestPageImages.CP2Image02Retina,
      },
    ],
    title: "A Traditional Christmas Eve, Mark Best Style",
    description:
      "One of Australia's best chefs and AEG ambassador, Mark best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
  },
  {
    id: 3,
    images: [
      { src: LatestPageImages.CP2Image03, alt: "Christmas stew" },
      {
        src: LatestPageImages.CP2Image03Retina,
      },
    ],
    title: "Taking Taste Further",
    description:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
  },
];
