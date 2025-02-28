import React from 'react';
import { PhotoProvider, PhotoView } from '@acr/react-photo-view';
import { Button, ImageList } from './doc-components';

const elementSize = 400;

export default function DocRender() {
  return (
    <PhotoProvider maskOpacity={0.5} loop={false}>
      <ImageList>
        <PhotoView
          width={elementSize}
          height={elementSize}
          // @ts-ignore
          render={({ scale, attrs }) => {
            const width = attrs.style!.width as number;
            const offset = (width - elementSize) / elementSize;
            // 保持子节点的 scale 的稳定
            const childScale = scale === 1 ? scale + offset : 1 + offset;

            return (
              <div {...attrs} className={`flex-none bg-white ${attrs.className || ''}`}>
                <div
                  style={{ transform: `scale(${childScale})`, width: elementSize, transformOrigin: '0 0', padding: 20 }}
                >
                  <div className="mb-2">Hello world</div>
                  <Button className="w-full mb-2" primary>
                    button
                  </Button>
                  <input
                    className="h-8 p-2 border border-gray-300"
                    placeholder="Input"
                    onMouseDown={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            );
          }}
        >
          <Button primary>Click</Button>
        </PhotoView>
      </ImageList>
    </PhotoProvider>
  );
}
