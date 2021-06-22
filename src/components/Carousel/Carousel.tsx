import { COMMON_IMAGES } from '@src/constants/defaults';
import Image from 'next/image';
import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { ImagePreview } from '@src/components/ImagePreview/ImagePreview';

import classnames from './index.module.scss';
import clsx from 'clsx';

interface CarouselProps {
  image_urls: string[];
}

enum DIRECTIONS {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const Carousel: React.FunctionComponent<CarouselProps> = (props) => {
  const { image_urls } = props;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const [isPreviewOpened, setIsPreviewOpened] = useState(false);

  const handleImageSelect = (index: number) => () => {
    if (index !== previewImageIndex) {
      setPreviewImageIndex(index);
      handleScroll(index);
    }
  };

  const handleChangeImage = (e: MouseEvent | KeyboardEvent, direction: DIRECTIONS) => {
    if (image_urls.length <= 1) {
      return;
    }
    let nextIndex = previewImageIndex;
    if (direction === DIRECTIONS.LEFT) {
      nextIndex = previewImageIndex - 1 < 0 ? image_urls.length - 1 : previewImageIndex - 1;
    } else {
      nextIndex = (previewImageIndex + 1) % image_urls.length;
    }
    setPreviewImageIndex(nextIndex);
    handleScroll(nextIndex);
  };

  const handleScroll = (index: number) => {
    const childNodes = scrollContainerRef.current?.firstChild?.childNodes as
      | HTMLDivElement[]
      | undefined;

    if (scrollContainerRef.current) {
      if (childNodes) {
        const imageXPosition = childNodes[index].getBoundingClientRect().x;
        const containerXPosition = scrollContainerRef.current.getBoundingClientRect().x;

        scrollContainerRef.current.scrollLeft += imageXPosition - containerXPosition;
      }
    }
  };

  return (
    <>
      <div className={classnames.image_container}>
        <div className={classnames.image_wrapper}>
          <Image
            width="600px"
            height="400px"
            src={image_urls[previewImageIndex] || COMMON_IMAGES.NO_DATA}
            onClick={() => setIsPreviewOpened(true)}
          />
        </div>
        <div className={classnames.images_select_container_wrapper}>
          <div className={classnames.images_select_container} ref={scrollContainerRef}>
            <div className={classnames.images_select}>
              {image_urls.map((image, index) => (
                <div
                  key={image}
                  className={clsx(classnames.images_select_item, {
                    [classnames.selected]: index === previewImageIndex,
                  })}
                  onClick={handleImageSelect(index)}
                  onKeyPress={handleImageSelect(index)}
                  role="button"
                  tabIndex={0}
                >
                  <Image width="180px" height="100px" src={image} />
                </div>
              ))}
            </div>
          </div>
          <>
            <div
              className={classnames.left_arrow}
              onClick={(e) => handleChangeImage(e, DIRECTIONS.LEFT)}
              onKeyPress={(e) => handleChangeImage(e, DIRECTIONS.LEFT)}
              role="button"
              tabIndex={0}
            ></div>
            <div
              className={classnames.right_arrow}
              onClick={(e) => handleChangeImage(e, DIRECTIONS.RIGHT)}
              onKeyPress={(e) => handleChangeImage(e, DIRECTIONS.RIGHT)}
              role="button"
              tabIndex={0}
            ></div>
          </>
        </div>
      </div>
      {isPreviewOpened && (
        <ImagePreview
          startIndex={previewImageIndex}
          image_urls={image_urls}
          handleClose={() => setIsPreviewOpened(false)}
        />
      )}
    </>
  );
};

export { Carousel };
