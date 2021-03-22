import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sectionsStore } from '@src/store';

interface CategoryContainerProps {}

const CategoryContainer: React.FunctionComponent<CategoryContainerProps> = () => {
  const items = useSelector(sectionsStore.selectors.getItems());

  useEffect(() => {
    // console.log(sections);
  }, [items]);

  return (
    <div>
      <h1>Items List</h1>
      <div>
        {items.map((item) => (
          <div key={item.id} className="border-2 border-blue-600 border-solid mb-2">
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
