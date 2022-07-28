import React from "react";
// import PropTypes from 'prop-types';
import { GalleryItem, ImgItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({webformatURL}) => {
 return (<GalleryItem className="gallery-item">
   <ImgItem src={ webformatURL}/>
  </GalleryItem>)
};

