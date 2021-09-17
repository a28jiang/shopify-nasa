import React from "react";
import ButtonGroup from "./ButtonGroup";
import { Grid } from "@material-ui/core";
import { Caption } from "@shopify/polaris";

const Header = ({ setPage, page }) => (
  <Grid container>
    <Grid item xs={12} sm={9}>
      <div class="Polaris-Header-Title">
        <span class="accent ">Nasa </span>Gallery 🚀💫
        <Caption>Discover the cosmos with a picture a day from Nasa</Caption>
      </div>
    </Grid>
    <Grid item xs={12} sm={3}>
      <ButtonGroup setPage={setPage} page={page} />
    </Grid>
  </Grid>
);

export default Header;
