import React, { useEffect, useState } from "react";
import { Card, Header, SkeletonComponent } from "../components";
import { fetchPics } from "../api";
import { Page } from "@shopify/polaris";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [liked, setLiked] = useState([]);
  const [images, setImages] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  const fetchImages = async (range) => {
    const { data } = await fetchPics(range);
    setLoadedData(true);
    setImages(data.reverse());
  };

  // check if liked images are saved in local storage
  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    if (liked) {
      setLiked(liked);
    }
  }, []);

  // fetch images on page change
  useEffect(() => {
    if (page) {
      fetchImages(page);
    }
  }, [page]);

  return (
    <>
      <Page>
        <Header setPage={setPage} page={page} />
        {!loadedData && <SkeletonComponent />}
        {images &&
          images.map((image) => (
            <Card data={image} liked={liked} setLiked={setLiked} />
          ))}
      </Page>
    </>
  );
};

export default Gallery;
