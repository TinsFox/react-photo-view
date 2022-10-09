import React from 'react';
import { PhotoProvider, PhotoView } from '@acr/react-photo-view';
import { Button, ImageList } from './doc-components';
import photo4 from '../images/4.jpg';

export default function DocButton() {
  return (
    <PhotoProvider>
      <ImageList>
        <PhotoView src={photo4.src}>
          <Button primary>Click</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
