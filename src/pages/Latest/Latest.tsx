import React, { useEffect } from "react";
import { Text } from "../../components/Text/Text";
import { Article } from "../../components/Article/Article";
import { Content } from "../../interfaces/content";
import styles from "./latest.module.scss";

import ScrollOut from "scroll-out";

import { content } from "../../mock/content";

interface Props {}

export const Latest: React.FC<Props> = () => {
  useEffect(() => {
    const scrollOut = ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true,
        offset: 100,
      },
    });

    return () => {
      scrollOut.teardown();
    };
  }, []);

  return (
    <section className={styles.latest}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Text component="h2">
            <span className={styles.headingAnimation1} data-scroll>
              All the{" "}
            </span>
            <span className={styles.headingAnimation2} data-scroll>
              latest{" "}
            </span>
            <span className={styles.headingAnimation1} data-scroll>
              from{" "}
            </span>
            <span className={styles.headingAnimation2} data-scroll>
              AEG
            </span>
          </Text>
        </div>
        <div className={styles.articleGrid}>
          {content.map((item: Content) => (
            <div
              className={styles.articleGridItem}
              key={`article__${item.id}`}
              data-scroll
            >
              <Article content={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
