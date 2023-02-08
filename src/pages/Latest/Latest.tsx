import React from "react";
import Grid from "@mui/material/Grid";
import { Text } from "../../components/Text/Text";
import { Article } from "../../components/Article/Article";
import { Content } from "../../interfaces/content";
import styles from "./latest.module.scss";

import { content } from "../../mock/content";

interface Props {}

export const Latest: React.FC<Props> = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={styles.heading}>
            <Text component="h2">All the latest from AEG</Text>
          </div>
        </Grid>
        <Grid container item xs={12} spacing={2}>
          {content.map((item: Content) => (
            <Grid item xs={4} key={`article__${item.id}`}>
              <Article content={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </section>
  );
};
