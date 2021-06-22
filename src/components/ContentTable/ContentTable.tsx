import { ItemContentType } from '@server/constants/item';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import classnames from './index.module.scss';

interface ContentItemType {
  id: number;
  key: string;
  value: string;
  content_type: ItemContentType;
}

interface ContentTableProps {
  items: ContentItemType[];
}

export const ContentTable: React.FunctionComponent<ContentTableProps> = (props) => {
  const { items } = props;

  const sortedItems = useMemo(
    () =>
      items.reduce<{
        accordionItems: ContentItemType[];
        singleItems: ContentItemType[];
      }>(
        (acc, item) => {
          switch (item.content_type) {
            case ItemContentType.named:
              acc.accordionItems.push(item);
              break;
            case ItemContentType.single:
              acc.singleItems.push(item);
              break;
          }

          return acc;
        },
        { accordionItems: [], singleItems: [] },
      ),
    [items],
  );

  return (
    <section className={classnames.contents_wrapper}>
      <div className={classnames.content_items_wrapper}>
        {sortedItems.singleItems.map((item) => (
          <ContentItem key={item.id} title={item.key} value={item.value} />
        ))}
      </div>
      <div className={classnames.content_items_wrapper}>
        {sortedItems.accordionItems.map((item) => (
          <AccordionContentItem key={item.id} title={item.key} value={item.value} />
        ))}
      </div>
    </section>
  );
};

const ContentItem: React.FunctionComponent<{
  title: string;
  value: string;
}> = (props) => {
  const { title, value } = props;

  return (
    <div className={classnames.content_item}>
      <div className={classnames.content_item_title}>{title}</div>
      <div className={classnames.content_item_value}>{value}</div>
    </div>
  );
};

const AccordionContentItem: React.FunctionComponent<{
  title: string;
  value: string;
}> = (props) => {
  const { title, value } = props;

  const [isOpened, setIsOpened] = useState(false);

  const toggleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={classnames.content_item}>
      <div
        className={clsx(classnames.content_item_title, classnames.toggle, {
          [classnames.opened]: isOpened,
        })}
        onClick={toggleOpen}
        onKeyPress={toggleOpen}
        role="button"
        tabIndex={0}
      >
        {title}
        <div className={classnames.icon} />
      </div>
      {isOpened && <div className={classnames.content_item_value}>{value}</div>}
    </div>
  );
};
