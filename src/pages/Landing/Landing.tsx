import React from "react";
import Grid from "@mui/material/Grid";
import { Image } from "../../components/Image/Image";
import { Text } from "../../components/Text/Text";
import { LandingPageImages } from "../../assets/images";
import styles from "./landing.module.scss";

interface Props {}

export const Landing: React.FC<Props> = () => {
  return (
    <section>
      <Grid container spacing={3}>
        <Grid container item xs={12} md={8} spacing={2}>
          <Grid item xs={6}>
            <div>
              <Image
                src={LandingPageImages.CP1Image01}
                srcSet={`${LandingPageImages.CP1Image01Retina} 2x`}
                alt="Father and son on a field"
              />
            </div>
          </Grid>
          <Grid container item xs={6} spacing={2}>
            <Grid item xs={12}>
              <Image
                src={LandingPageImages.CP1Image02}
                srcSet={`${LandingPageImages.CP1Image02Retina} 2x`}
                alt="Organic garden crops in a bowl"
              />
            </Grid>
            <Grid item xs={12}>
              <Image
                src={LandingPageImages.CP1Image03}
                srcSet={`${LandingPageImages.CP1Image03} 2x`}
                alt="Four asparagus sticks"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={4}>
          <div>
            <div className={styles.calloutHeading}>
              <Text component="h2">Answer your body's needs</Text>
            </div>
            <div className={styles.calloutDescription}>
              <Text>
                The way ingredients are sourced affects the way we nourish our
                bodies. Author Mark Schatzer believes our body naturally
                develops an appetite for the foods and nutrients it needs to be
                healthy, but that artificial flavourings are getting in the way.
                This can be reversed by focusing on high-quality ingredients and
                being mindful as your appetite guides you to consume according
                your body's needs.
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
        </Grid>
      </Grid>
    </section>
  );
};
