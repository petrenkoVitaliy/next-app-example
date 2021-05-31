import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { sectionsStore } from '@src/store';
import { ItemView } from '@src/containers/view_containers/ItemView/ItemView';

const ItemContainer: React.FunctionComponent = () => {
  const storeItem = useSelector(sectionsStore.selectors.getItem());

  const selectedItem = useMemo(
    () =>
      storeItem
        ? {
            id: storeItem.id,
            name: storeItem.name,
            description: storeItem.description,
            price: storeItem.price,
            CategoryId: storeItem.CategoryId,
            image_urls: storeItem.ImageModels.map((image) => image.url),
          }
        : null,
    [storeItem],
  );

  return <>{selectedItem && <ItemView {...selectedItem} />}</>;
};

export { ItemContainer };
