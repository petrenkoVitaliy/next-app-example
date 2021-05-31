import { COMMON_IMAGES } from '@src/constants/defaults';
import classnames from './index.module.scss';
import Image from 'next/image';

interface ItemViewProps {
  id: number;
  name: string;
  description: string;
  price: number;
  CategoryId: number;
  image_urls: string[];
}

const ItemView: React.FunctionComponent<ItemViewProps> = (props) => {
  const { image_urls, name, price, description } = props;

  return (
    <section className={classnames.item_wrapper}>
      <article className={classnames.item_body}>
        <div className={classnames.image_wrapper}>
          <Image width="600px" height="400px" src={image_urls[0] || COMMON_IMAGES.NO_DATA} />
        </div>
        <div className={classnames.description_block}>
          <div className={classnames.name}>{name}</div>
          <div className={classnames.price}>{price}</div>
          <div className={classnames.description}>{description}</div>
        </div>
      </article>
    </section>
  );
};

export { ItemView };
