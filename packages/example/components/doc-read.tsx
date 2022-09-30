import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ImageList } from './doc-components';
import photo7 from '../images/7.jpg';

export default function DocRead() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo7.src}>
          <img src={photo7.src} className="block object-cover w-32 h-32" alt="" />
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
