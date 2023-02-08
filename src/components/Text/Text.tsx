import React from "react";
import styles from "./text.module.scss";

interface Props {
  children: React.ReactNode;
  truncated?: boolean;
  maxLines?: number;
  component?: React.ElementType;
}

// We want to wrap the text in case we want extra functionalities such as truncating the text or supporting other languages

export const Text: React.FC<Props> = ({
  children,
  truncated = false,
  maxLines = 2,
  component = "p",
}) => {
  const Tag = component;

  return (
    <Tag
      className={styles.text}
      style={
        truncated
          ? {
              WebkitLineClamp: maxLines,
              WebkitBoxOrient: "vertical",
            }
          : {}
      }
    >
      {children}
    </Tag>
  );
};
