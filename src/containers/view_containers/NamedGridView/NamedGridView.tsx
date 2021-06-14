import { useRef } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '@src/components/Card/Card';
import { commonStore } from '@src/store';

import classnames from './index.module.scss';

interface Category {
  id: number;
  name: string;
  items: {
    name: string;
    image_urls: string[];
    description: string;
  }[];
}

interface NamedGridViewProps {
  title: string;
  categories: Category[];
}

const NamedGridView: React.FunctionComponent<NamedGridViewProps> = (props) => {
  const { categories, title } = props;

  const gridViewContainerRef = useRef<HTMLElement>(null);
  const windowSize = useSelector(commonStore.selectors.getWindowSize());

  return (
    <section className={classnames.named_grid_wrapper} ref={gridViewContainerRef}>
      <h1>{title}</h1>

      {categories.map((category) => (
        <article key={category.id}>
          <h3>{category.name}</h3>
          <div className={classnames.cards_wrapper}>
            {category.items.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                description={item.description}
                images={item.image_urls}
                redirectUrl={`/store/${item.name}`}
                size={windowSize?.size || null}
                marginRight={50}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export { NamedGridView };
