import React from "react";
import { Card, TextStyle, Heading, Subheading } from "@shopify/polaris";
import { Grid } from "@material-ui/core";
import Image from "material-ui-image";
import Heart from "react-animated-heart";

const HEART_STYLE = {
  position: "relative",
  top: "-32px",
};

const IMAGE_STYLE = {
  objectFit: "cover",
  height: "100%",
};

const CustomCard = ({ data, liked, setLiked }) => {
  const { date, title, url, explanation } = data;

  const onHeartClick = (date) => {
    const index = liked.indexOf(date);
    let updatedArr;
    if (index > -1) {
      updatedArr = liked.filter((like) => like !== date);
    } else {
      updatedArr = liked.concat([date]);
    }
    setLiked(updatedArr);
    localStorage.setItem("liked", JSON.stringify(updatedArr));
  };

  return (
    <Card sectioned>
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <Image
            imageStyle={{ borderRadius: "12px" }}
            style={IMAGE_STYLE}
            src={url}
            alt={title}
          />
        </Grid>
        <Grid item container sm={6}>
          <Grid item xs={10}>
            <Heading>{title}</Heading>

            <br />
            <Subheading>{date}</Subheading>
          </Grid>
          <Grid item xs={2}>
            <Heart
              styles={HEART_STYLE}
              class="heartIcon"
              isClick={liked.indexOf(data.date) > -1}
              onClick={() => onHeartClick(date)}
            />
          </Grid>
          <TextStyle variation="subdued">{explanation}</TextStyle>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CustomCard;
