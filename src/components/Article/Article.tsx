import React from "react";
import { Content } from "../../interfaces/content";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import { Text } from "../Text/Text";
import styles from "./article.module.scss";

interface Props {
  content: Content;
}

// Article components are most likely to be reused with different layouts

export const Article: React.FC<Props> = ({ content }) => {
  const { id, title, description, images } = content;

  const handleReadMoreClick = (id: number): void => {
    console.log("Read more clicked with ID: ", id);
  };

  return (
    <article>
      <div className={styles.image}>
        <Image
          src={images[0].src}
          srcSet={`${images[1]} 2x`}
          alt="images[0].alt"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>
            <Text component="h1">{title}</Text>
          </div>
          <div className={styles.description}>
            <Text>{description}</Text>
          </div>
        </div>
        <div>
          <Button onClick={(): void => handleReadMoreClick(id)}>
            Read more
          </Button>
        </div>
      </div>
    </article>
  );
};
