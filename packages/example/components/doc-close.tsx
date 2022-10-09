import React from 'react';
import { PhotoProvider, PhotoView } from '@acr/react-photo-view';
import { ImageList, Image } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocClose() {
  return (
    <PhotoProvider pullClosable={false} maskClosable={false} maskOpacity={null}>
      <ImageList>
        <PhotoView src={photo4.src}>
          <Image src={photo4.src} />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
