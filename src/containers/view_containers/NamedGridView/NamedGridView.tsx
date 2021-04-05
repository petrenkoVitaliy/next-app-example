import { Card } from '@src/components/Card/Card';

import classnames from './index.module.scss';

interface NamedGridViewProps {
  title: string;

  categories: {
    id: number;
    name: string;
    items: {
      name: string;
      image_url: string;
    }[];
  }[];
}

const NamedGridView: React.FunctionComponent<NamedGridViewProps> = (props) => {
  const { categories, title } = props;

  return (
    <section className={classnames.named_grid_wrapper}>
      <h1>{title}</h1>

      {categories.map((category) => (
        <article key={category.id}>
          <h3>{category.name}</h3>

          <div className={classnames.cards_wrapper}>
            {category.items.map((item) => (
              <Card key={item.name} name={item.name} image={item.image_url} id={item.name} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export { NamedGridView };
