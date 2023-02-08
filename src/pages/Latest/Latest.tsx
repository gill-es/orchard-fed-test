import React from "react";
import { Text } from "../../components/Text/Text";
import { Article } from "../../components/Article/Article";
import { Content } from "../../interfaces/content";
import styles from "./latest.module.scss";

import { content } from "../../mock/content";

interface Props {}

export const Latest: React.FC<Props> = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Text component="h2">All the latest from AEG</Text>
        </div>
        <div className={styles.articleGrid}>
          {content.map((item: Content) => (
            <div className={styles.articleGridItem} key={`article__${item.id}`}>
              <Article content={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
