import { useMemo, useRef } from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import { Card } from '@src/components/Card/Card';
import { commonStore } from '@src/store';

import classnames from './index.module.scss';
import { shouldBeGrownCheck } from '@src/utils/functions/markup';

interface Category {
  id: number;
  name: string;
  items: {
    name: string;
    image_url: string;
    description: string;
  }[];
}

interface GridCategory extends Category {
  isFullWrap: boolean;
  marginForCard?: number;
}

interface NamedGridViewProps {
  title: string;
  categories: Category[];
}

const NamedGridView: React.FunctionComponent<NamedGridViewProps> = (props) => {
  const { categories, title } = props;

  const gridViewContainerRef = useRef<HTMLElement>(null);
  const windowSize = useSelector(commonStore.selectors.getWindowSize());

  const categoriesGrid: GridCategory[] = useMemo(() => {
    return categories.map((category) => {
      const containerWidth = gridViewContainerRef?.current?.clientWidth;

      if (!containerWidth || !windowSize) {
        return {
          ...category,
          isFullWrap: false,
        };
      }

      const cardSize = Card.Sizes[windowSize.size];
      const { isFullWrap, marginForCard } = shouldBeGrownCheck(
        containerWidth,
        cardSize,
        category.items.length,
        Card.DefaultMargin,
      );

      return {
        ...category,
        isFullWrap,
        marginForCard,
      };
    });
  }, [categories, gridViewContainerRef, windowSize]);

  return (
    <section className={classnames.named_grid_wrapper} ref={gridViewContainerRef}>
      <h1>{title}</h1>

      {categoriesGrid.map((category) => (
        <article key={category.id}>
          <h3>{category.name}</h3>
          <div
            className={clsx(classnames.cards_wrapper, {
              [classnames.fullWrap]: category.isFullWrap,
            })}
          >
            {category.items.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                description={item.description}
                image={item.image_url}
                id={item.name}
                size={windowSize?.size || null}
                marginRight={category.marginForCard}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export { NamedGridView };
