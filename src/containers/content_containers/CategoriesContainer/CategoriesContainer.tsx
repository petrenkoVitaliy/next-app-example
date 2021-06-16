import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { sectionsStore } from '@src/store';
import { GridView } from '@src/containers/view_containers/GridView/GridView';

const CategoriesContainer: React.FunctionComponent = () => {
  const storeItems = useSelector(sectionsStore.selectors.getItems());

  const items = useMemo(
    () =>
      storeItems.map((item) => ({
        id: item.id,
        name: item.name,
        image_urls: item.ImageModels.map((image) => image.url),
        description: item.preview_description,
      })),
    [storeItems],
  );

  return (
    <>
      <GridView items={items} title="Items List" />
    </>
  );
};

export { CategoriesContainer };
