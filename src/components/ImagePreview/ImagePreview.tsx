import classnames from './index.module.scss';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { COMMON_IMAGES } from '@src/constants/defaults';

interface ImagePreviewProps {
  image_urls: string[];
  startIndex: number;
  handleClose: () => void;
}

enum DIRECTIONS {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const ImagePreviewComponent: React.FunctionComponent<ImagePreviewProps> = (props) => {
  const { image_urls, startIndex, handleClose } = props;

  const [previewImageIndex, setPreviewImageIndex] = useState(startIndex);

  const domNode = useMemo(() => document.querySelector('#__next')?.firstElementChild, []);

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);

  const handleChangeImage = (direction: DIRECTIONS) => {
    if (image_urls.length <= 1) {
      return;
    }
    if (direction === DIRECTIONS.LEFT) {
      setPreviewImageIndex(
        previewImageIndex - 1 < 0 ? image_urls.length - 1 : previewImageIndex - 1,
      );
    } else {
      setPreviewImageIndex((previewImageIndex + 1) % image_urls.length);
    }
  };

  const Component = (
    <div className={classnames.image_preview_wrapper}>
      <div className={classnames.image_container}>
        <Image layout="fill" src={image_urls[previewImageIndex] || COMMON_IMAGES.NO_DATA} />
      </div>
      <div
        className={classnames.close_btn}
        onClick={handleClose}
        onKeyPress={handleClose}
        role="button"
        tabIndex={0}
      />
      <>
        <div
          className={classnames.left_arrow}
          onClick={() => handleChangeImage(DIRECTIONS.LEFT)}
          onKeyPress={() => handleChangeImage(DIRECTIONS.LEFT)}
          role="button"
          tabIndex={0}
        ></div>
        <div
          className={classnames.right_arrow}
          onClick={() => handleChangeImage(DIRECTIONS.RIGHT)}
          onKeyPress={() => handleChangeImage(DIRECTIONS.RIGHT)}
          role="button"
          tabIndex={0}
        ></div>
      </>
    </div>
  );

  return domNode ? createPortal(Component, domNode) : null;
};
export default ImagePreviewComponent;

export const ImagePreview = dynamic(() => import('./ImagePreview'), {
  ssr: false,
});
