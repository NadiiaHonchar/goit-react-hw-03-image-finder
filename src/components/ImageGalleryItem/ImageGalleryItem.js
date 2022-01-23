import React from "react";
import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <>
      <li className={style.ImageGalleryItem}>
        <img
          className={style.ImageGalleryItemImage}
          src={webformatURL}
          alt=""
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
