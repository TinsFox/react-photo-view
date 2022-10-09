import React from 'react';
import { PhotoProvider, PhotoView } from '@acr/react-photo-view';
import { ImageList, Image, photoImages } from './doc-components';

export default function DocLoop() {
  return (
    <PhotoProvider loop={4}>
      <ImageList>
        {photoImages.slice(0, 3).map((item, index) => (
          <PhotoView key={index} src={item}>
            <Image src={item} />
          </PhotoView>
        ))}
      </ImageList>
    </PhotoProvider>
  );
}
