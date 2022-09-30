import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Button, ImageList } from './doc-components';
import { EosIconsBubbleLoading } from '../icons/EosIconsBubbleLoading';
import defaultPhoto from '../images/default-photo.svg';

export default function DocBroken() {
  return (
    <ImageList>
      <PhotoProvider
        loadingElement={<EosIconsBubbleLoading className="w-8 h-8 text-white" />}
        brokenElement={<img className="w-32 h-32" src={defaultPhoto.src} alt="" />}
      >
        <PhotoView src="/error.png">
          <Button>Click</Button>
        </PhotoView>
      </PhotoProvider>
    </ImageList>
  );
}
