import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import { Card, SkeletonBodyText } from "@shopify/polaris";

const SkeletonCard = () => (
  <Card sectioned>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <Skeleton variant="rect" height="100%" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SkeletonBodyText lines={15} />
      </Grid>
    </Grid>
  </Card>
);

const SkeletonComponent = ({ count = 3 }) => {
  const skeletons = [];
  for (var i = 0; i < 3; i++) {
    skeletons.push(<SkeletonCard />);
  }
  return skeletons;
};

export default SkeletonComponent;
