import classnames from './index.module.scss';
import { Card } from '@src/components/Card/Card';

interface GridViewProps {
  title: string;

  items: {
    name: string;
    image_url: string;
  }[];
}

const GridView: React.FunctionComponent<GridViewProps> = (props) => {
  const { items, title } = props;

  return (
    <div className={classnames.grid_wrapper}>
      <h1>{title}</h1>
      <div className={classnames.cards_wrapper}>
        {items.map((item) => (
          <Card key={item.name} name={item.name} image={item.image_url} id={item.name} />
        ))}
      </div>
    </div>
  );
};

export { GridView };
