import { COMMON_IMAGES } from '@src/constants/defaults';
import { WindowSizesEnum } from '@src/interfaces/windowSize.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { KeyboardEvent, MouseEvent, useMemo, useState } from 'react';

import classnames from './index.module.scss';

interface CardProps {
  name: string;
  description: string;
  images: string[];
  redirectUrl: string;
  size: WindowSizesEnum | null;
  marginRight?: number;
}

type Prototype = { Sizes: { [key in WindowSizesEnum]: number }; DefaultMargin: number };

const DEFAULT_MARGIN = 40;
const Sizes: { [key in WindowSizesEnum]: number } = {
  [WindowSizesEnum.extra_small]: 500,
  [WindowSizesEnum.small]: 500,
  [WindowSizesEnum.medium]: 500,
  [WindowSizesEnum.large]: 500,
  [WindowSizesEnum.extra_large]: 550,
};

enum DIRECTIONS {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const CardCarousel: React.FunctionComponent<CardProps> & Prototype = (props) => {
  const { name, images, redirectUrl, size, marginRight, description } = props;

  const router = useRouter();

  const [shownImageIndex, setShownImageIndex] = useState(0);

  const image = useMemo(
    () => images[shownImageIndex] || COMMON_IMAGES.NO_DATA,
    [shownImageIndex, images],
  );
  const cardWidth = useMemo(() => Sizes[size || WindowSizesEnum.medium] - DEFAULT_MARGIN, [size]);
  const cardHeight = useMemo(() => cardWidth / 1.5, [cardWidth]);
  const imageHeight = useMemo(() => cardWidth / 1.8, [cardWidth]);

  const handleChangeImage = (e: MouseEvent | KeyboardEvent, direction: DIRECTIONS) => {
    e.stopPropagation();
    if (images.length <= 1) {
      return;
    }
    if (direction === DIRECTIONS.LEFT) {
      setShownImageIndex(shownImageIndex - 1 < 0 ? images.length - 1 : shownImageIndex - 1);
    } else {
      setShownImageIndex((shownImageIndex + 1) % images.length);
    }
  };

  const handleClick = () => {
    router.push(redirectUrl);
  };

  return (
    <div
      className={classnames.card_carousel}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
      style={{
        width: cardWidth,
        height: cardHeight,
        marginRight: marginRight || DEFAULT_MARGIN,
      }}
    >
      <div className={classnames.image_wrapper} style={{ width: cardWidth, height: imageHeight }}>
        <Image height={imageHeight} width={cardWidth} src={image} />
      </div>
      <div className={classnames.title}>
        <Link href={redirectUrl}>{name}</Link>
        <div className={classnames.price}>100$</div>
      </div>
      <div className={classnames.details}>{description}</div>
      {images.length > 1 && (
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
            onKeyPress={(e) => handleChangeImage(e, DIRECTIONS.LEFT)}
            role="button"
            tabIndex={0}
          ></div>
        </>
      )}
    </div>
  );
};

CardCarousel.Sizes = Sizes;
CardCarousel.DefaultMargin = DEFAULT_MARGIN;

export { CardCarousel };
