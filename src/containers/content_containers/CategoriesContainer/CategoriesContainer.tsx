import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sectionsStore } from '@src/store';
import { GridView } from '@src/containers/view_containers/GridView/GridView';

const CategoriesContainer: React.FunctionComponent = () => {
  const storeItems = useSelector(sectionsStore.selectors.getItems());

  const items = useMemo(
    () => storeItems.map((item) => ({ name: item.name, image_url: item.image_url })),
    [storeItems],
  );

  return (
    <>
      <GridView items={items} title="Sections List" />
    </>
  );
};

export { CategoriesContainer };
