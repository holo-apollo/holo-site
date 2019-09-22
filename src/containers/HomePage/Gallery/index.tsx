import React, { FunctionComponent } from 'react';
import Slider from 'react-slick';

import data from './data';
import { GalleryItem } from './styled';

const Gallery: FunctionComponent<{}> = () => {
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
