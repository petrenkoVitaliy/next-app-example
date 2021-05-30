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

const DEFAULT_MARGIN = 5;
const Sizes: { [key in WindowSizesEnum]: number } = {
  [WindowSizesEnum.extra_small]: 360,
  [WindowSizesEnum.small]: 360,
  [WindowSizesEnum.medium]: 360,
  [WindowSizesEnum.large]: 360,
  [WindowSizesEnum.extra_large]: 460,
};

const Card: React.FunctionComponent<CardProps> & Prototype = (props) => {
  const { name, image, id, size, description, marginRight } = props;

  const router = useRouter();
  const cardWidth = useMemo(() => Sizes[size || WindowSizesEnum.medium] - DEFAULT_MARGIN, [size]);

  const handleClick = () => {
    router.push(`/store/${id}`);
  };

  const handleKeyPress = () => {
    router.push(`/store/${id}`);
  };

  return (
    <div
      className={classnames.card}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      style={{ width: cardWidth, marginRight: marginRight || DEFAULT_MARGIN }}
    >
      <div className={classnames.image_wrapper} style={{ width: cardWidth }}>
        <Image height="200px" width={cardWidth} src={image} />
      </div>
      <div className={classnames.title}>
        <Link href={`/store/${id}`}>{name}</Link>
      </div>
      <div className={classnames.details}>{description}</div>
    </div>
  );
};

Card.Sizes = Sizes;
Card.DefaultMargin = DEFAULT_MARGIN;
export { Card };
