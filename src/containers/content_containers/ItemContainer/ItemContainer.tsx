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
            tags: storeItem.ItemTagModels.map((tag) => ({
              id: tag.id,
              key: tag.key,
              value: tag.value,
            })),
            contentItems: storeItem.ItemContentModels.map((tag) => ({
              id: tag.id,
              key: tag.key,
              value: tag.value,
              content_type: tag.content_type,
            })),
          }
        : null,
    [storeItem],
  );

  return <>{selectedItem && <ItemView {...selectedItem} />}</>;
};

export { ItemContainer };
