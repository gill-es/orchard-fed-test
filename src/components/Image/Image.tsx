import React from "react";
import styles from "./image.module.scss";

interface Props {
  src: string;
  srcSet?: string;
  alt: string;
}

// This component extends <img> tag with additional functionalities such as responsiveness, and in the future, lazy loading, image optimization, etc.

export const Image: React.FC<Props> = ({ src, srcSet, alt, ...rest }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={src}
        srcSet={srcSet}
        alt={alt}
        {...rest}
      />
    </div>
  );
};
