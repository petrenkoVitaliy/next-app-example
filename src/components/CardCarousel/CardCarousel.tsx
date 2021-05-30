import { WindowSizesEnum } from '@src/interfaces/windowSize.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import classnames from './index.module.scss';

interface CardProps {
  name: string;
  description: string;
  image: string;
  id: string;
  size: WindowSizesEnum | null;
  marginRight?: number;
}

type Prototype = { Sizes: { [key in WindowSizesEnum]: number }; DefaultMargin: number };

const DEFAULT_MARGIN = 20;
const Sizes: { [key in WindowSizesEnum]: number } = {
  [WindowSizesEnum.extra_small]: 500,
  [WindowSizesEnum.small]: 500,
  [WindowSizesEnum.medium]: 500,
  [WindowSizesEnum.large]: 500,
  [WindowSizesEnum.extra_large]: 550,
};

const CardCarousel: React.FunctionComponent<CardProps> & Prototype = (props) => {
  const { name, image, id, size, marginRight } = props;

  const router = useRouter();
  const cardWidth = useMemo(() => Sizes[size || WindowSizesEnum.medium] - DEFAULT_MARGIN, [size]);
  const cardHeight = useMemo(() => cardWidth / 1.5, [cardWidth]);
  const imageHeight = useMemo(() => cardWidth / 1.8, [cardWidth]);

  const handleClick = () => {
    router.push(`/store/${id}`);
  };

  const handleKeyPress = () => {
    router.push(`/store/${id}`);
  };

  return (
    <div
      className={classnames.card_carousel}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
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
        <Link href={`/store/${id}`}>{name}</Link>
        <div className={classnames.price}>100$</div>
      </div>
    </div>
  );
};

CardCarousel.Sizes = Sizes;
CardCarousel.DefaultMargin = DEFAULT_MARGIN;

export { CardCarousel };
