import { Carousel } from '@src/components/Carousel/Carousel';
import { Button } from '@src/components/Button/Button';
import { TagsTable } from '@src/components/TagsTable/TagsTable';
import { ContentTable } from '@src/components/ContentTable/ContentTable';

import classnames from './index.module.scss';
import { ItemContentType } from '@server/constants/item';

interface ItemViewProps {
  id: number;
  name: string;
  description: string;
  price: number;
  CategoryId: number;

  image_urls: string[];
  tags: { id: number; key: string; value: string }[];
  contentItems: { id: number; key: string; value: string; content_type: ItemContentType }[];
}

const ItemView: React.FunctionComponent<ItemViewProps> = (props) => {
  const { id, image_urls, name, price, description, tags, contentItems } = props;

  return (
    <>
      <section className={classnames.item_wrapper}>
        <article className={classnames.item_body}>
          <Carousel image_urls={image_urls} />

          <div className={classnames.description_block}>
            <div className={classnames.name}>{name}</div>
            <div className={classnames.code}>{id}</div>
            <div className={classnames.price}>{`${price} usd`}</div>
            <Button text="buy" type={Button.Types.MEDIUM} />
            <div className={classnames.description}>{description}</div>
          </div>
        </article>

        <TagsTable tags={tags} />
        <ContentTable items={contentItems} />
      </section>
    </>
  );
};

export { ItemView };
