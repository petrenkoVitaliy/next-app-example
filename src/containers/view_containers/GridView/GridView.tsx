import { CardCarousel } from '@src/components/CardCarousel/CardCarousel';
import { COMMON_IMAGES } from '@src/constants/defaults';
import { commonStore } from '@src/store';
import { shouldBeGrownCheck } from '@src/utils/functions/markup';
import clsx from 'clsx';
import { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import classnames from './index.module.scss';

interface Item {
  name: string;
  description: string;
  image_urls: string[];
}

interface GridViewProps {
  title: string;

  items: Item[];
}

const GridView: React.FunctionComponent<GridViewProps> = (props) => {
  const { items, title } = props;

  const gridViewContainerRef = useRef<HTMLElement>(null);

  const windowSize = useSelector(commonStore.selectors.getWindowSize());

  const { isFullWrap, marginForCard } = useMemo(() => {
    const containerWidth = gridViewContainerRef?.current?.clientWidth;

    if (!containerWidth || !windowSize) {
      return { isFullWrap: false };
    }

    const cardSize = CardCarousel.Sizes[windowSize.size];
    const { isFullWrap, marginForCard } = shouldBeGrownCheck(
      containerWidth,
      cardSize,
      items.length,
      CardCarousel.DefaultMargin,
    );

    return { isFullWrap, marginForCard };
  }, [items, gridViewContainerRef, windowSize]);

  return (
    <section className={classnames.grid_wrapper}>
      <h1>{title}</h1>
      <article
        className={clsx(classnames.cards_wrapper, {
          [classnames.fullWrap]: isFullWrap,
        })}
        ref={gridViewContainerRef}
      >
        {items.map((item) => (
          <CardCarousel
            key={item.name}
            name={item.name}
            image={item.image_urls[0] || COMMON_IMAGES.NO_DATA}
            id={item.name}
            size={windowSize?.size || null}
            description={item.description}
            marginRight={marginForCard}
          />
        ))}
      </article>
    </section>
  );
};

export { GridView };
