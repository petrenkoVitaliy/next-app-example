import { COMMON_IMAGES } from '@src/constants/defaults';
import { WindowSizesEnum } from '@src/interfaces/windowSize.interface';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

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

const DEFAULT_MARGIN = 5;
const Sizes: { [key in WindowSizesEnum]: number } = {
  [WindowSizesEnum.extra_small]: 360,
  [WindowSizesEnum.small]: 360,
  [WindowSizesEnum.medium]: 360,
  [WindowSizesEnum.large]: 360,
  [WindowSizesEnum.extra_large]: 460,
};

const Card: React.FunctionComponent<CardProps> & Prototype = (props) => {
  const { name, images, redirectUrl, size, description, marginRight } = props;

  const router = useRouter();

  const [image, setImage] = useState<string>(images[0] || COMMON_IMAGES.NO_DATA);

  const cardWidth = useMemo(() => Sizes[size || WindowSizesEnum.medium] - DEFAULT_MARGIN, [size]);

  const handleHover = (isEnter: boolean) => {
    if (!images[0] || !images[1]) {
      return;
    }
    setImage(isEnter ? images[1] : images[0]);
  };

  const handleClick = () => {
    router.push(redirectUrl);
  };

  return (
    <div
      className={classnames.card}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
      style={{ width: cardWidth, marginRight: marginRight || DEFAULT_MARGIN }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={classnames.image_wrapper} style={{ width: cardWidth }}>
        <Image height="200px" width={cardWidth} src={image} />
      </div>
      <div className={classnames.title}>
        <Link href={redirectUrl}>{name}</Link>
      </div>
      <div className={classnames.details}>{description}</div>
    </div>
  );
};

Card.Sizes = Sizes;
Card.DefaultMargin = DEFAULT_MARGIN;
export { Card };
