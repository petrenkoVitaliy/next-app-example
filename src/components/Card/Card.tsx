import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classnames from './index.module.scss';

interface CardProps {
  name: string;
  image: string;
  id: string;
}

export const Card: React.FunctionComponent<CardProps> = (props) => {
  const { name, image, id } = props;

  const router = useRouter();

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
    >
      <div className={classnames.image_wrapper}>
        <Image height="200px" width="360px" src={image} />
      </div>
      <div className={classnames.title}>
        <Link href={`/store/${id}`}>{name}</Link>
      </div>
    </div>
  );
};
