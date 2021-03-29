import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sectionsStore } from '@src/store';
import classnames from './index.module.scss';
import { Card } from '@src/components/Card/Card';

interface CategoryContainerProps {}

const CategoryContainer: React.FunctionComponent<CategoryContainerProps> = () => {
  const items = useSelector(sectionsStore.selectors.getItems());

  useEffect(() => {
    // console.log(sections);
  }, [items]);

  return (
    <div className={classnames.categories_wrapper}>
      <h1>Sections List</h1>
      <div className={classnames.categories}>
        {items.map((item) => (
          <Card key={item.name} name={item.name} image={item.image_url} id={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
