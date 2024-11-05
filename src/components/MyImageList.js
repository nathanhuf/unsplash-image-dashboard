import React from "react";
import { ImageList } from "@mui/material";
import ImageCard from "./ImageCard";

const MyImageList = ({ images }) => {
  return (
    <ImageList variant="quilted" cols={3} gap={8}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          description={image.description}
          id={image.id}
          url={image.url}
        />
      ))}
    </ImageList>
  );
};

export default MyImageList;
