import React from "react";
import { Card, TextStyle, Heading, Subheading } from "@shopify/polaris";
import { Grid } from "@material-ui/core";
import Image from "material-ui-image";
import Heart from "react-animated-heart";
import YouTube from "react-youtube";

const VID_OPTIONS = {
  height: "320px",
  width: "100%",
  borderRadius: "12px",
};

const HEART_STYLE = {
  position: "relative",
  top: "-32px",
  right: "1rem",
  marginBottom: "-60px",
};

const IMAGE_STYLE = {
  objectFit: "cover",
  height: "100%",
};

const CustomCard = ({ data, liked, setLiked }) => {
  const { date, title, url, explanation } = data;
  const vidID = url.split("youtube.com/embed/");
  const isVideo = vidID.length === 2;
  const gridWidth = isVideo ? 12 : 6;

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
        <Grid item xs={12} sm={gridWidth}>
          {isVideo ? (
            <YouTube videoId={vidID[1].split("?")[0]} opts={VID_OPTIONS} />
          ) : (
            <Image
              imageStyle={{ borderRadius: "12px" }}
              style={IMAGE_STYLE}
              src={url}
              alt={title}
            />
          )}
        </Grid>
        <Grid item container xs={12} sm={gridWidth}>
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
