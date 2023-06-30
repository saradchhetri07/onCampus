import { Grid } from "@nextui-org/react";

import { Card5 } from "./Card5";

const HomeCard = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={12}>
        <Card5 />
      </Grid>
    </Grid.Container>
  );
};

export default HomeCard;
