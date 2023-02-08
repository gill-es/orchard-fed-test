import React from "react";
import { Image } from "../../components/Image/Image";
import { Text } from "../../components/Text/Text";
import { Image as ImageInterface } from "../../interfaces/image";
import styles from "./landing.module.scss";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { images } from "../../mock/images";

interface Props {}

export const Landing: React.FC<Props> = () => {
  const [open, setOpen] = React.useState(false);
  const [lightboxImage, setLightBoxImage] =
    React.useState<null | ImageInterface>(null);

  const handleImageClick = (
    e: React.MouseEvent,
    image: ImageInterface
  ): void => {
    e.preventDefault();

    setOpen(true);
    setLightBoxImage(image);
  };

  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.imageGrid}>
            <div className={styles.imageGridCol}>
              <div className={styles.imageGridItem}>
                <a
                  role="button"
                  href="#"
                  onClick={(e): void => handleImageClick(e, images.cp1Image01)}
                >
                  <Image
                    src={images.cp1Image01.src}
                    srcSet={`${images.cp1Image01.srcSet[0].src} 2x`}
                    alt={images.cp1Image01.alt}
                  />
                </a>
              </div>
            </div>
            <div className={styles.imageGridCol}>
              <div className={styles.imageGridItem}>
                <a
                  role="button"
                  href="#"
                  onClick={(e): void => handleImageClick(e, images.cp1Image02)}
                >
                  <Image
                    src={images.cp1Image02.src}
                    srcSet={`${images.cp1Image02.srcSet[0].src} 2x`}
                    alt={images.cp1Image02.alt}
                  />
                </a>
              </div>
              <div className={styles.imageGridItem}>
                <a
                  role="button"
                  href="#"
                  onClick={(e): void => handleImageClick(e, images.cp1Image03)}
                >
                  <Image
                    src={images.cp1Image03.src}
                    srcSet={`${images.cp1Image03.srcSet[0].src} 2x`}
                    alt={images.cp1Image03.alt}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.textGrid}>
            <div>
              <div className={styles.calloutHeading}>
                <Text component="h2">Answer your body's needs</Text>
              </div>
              <div className={styles.calloutDescription}>
                <Text>
                  The way ingredients are sourced affects the way we nourish our
                  bodies. Author Mark Schatzer believes our body naturally
                  develops an appetite for the foods and nutrients it needs to
                  be healthy, but that artificial flavourings are getting in the
                  way. This can be reversed by focusing on high-quality
                  ingredients and being mindful as your appetite guides you to
                  consume according to your body's needs.
                </Text>
              </div>
            </div>
            <div>
              <div className={styles.takeawayHeading}>
                <h3>Be Mindful</h3>
              </div>
              <div className={styles.takeawayDescription}>
                <p>
                  Sourcing local organic food is a good way to start being more
                  mindful about what you're cooking and eating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <Lightbox
          open={open}
          close={(): void => setOpen(false)}
          slides={[lightboxImage]}
          render={{
            iconPrev: () => null,
            iconNext: () => null,
          }}
        />
      )}
    </>
  );
};
