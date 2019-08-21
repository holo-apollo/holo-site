// @flow
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import data from './data';
import { GalleryItem } from './styled';

const Gallery = () => {
  return (
    <Slider
      arrows={false}
      dots={false}
      draggable={false}
      autoplay={true}
      centerMode={true}
      variableWidth={true}
    >
      {data.map(item => (
        <GalleryItem key={item.id} src={item.imgUrl} />
      ))}
    </Slider>
  );
};

export default Gallery;
