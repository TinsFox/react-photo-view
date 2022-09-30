import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList } from './doc-components';
import photo6 from '../images/6.jpg';

export default function DocCover() {
  return (
    <PhotoProvider speed={() => 800}>
      <ImageList>
        <PhotoView src={photo6.src}>
          <img src={photo6.src} className="block object-cover w-32 h-32 md:w-64 md:h-64" alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
