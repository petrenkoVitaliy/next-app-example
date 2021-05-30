import { useSelector } from 'react-redux';

import { sectionsStore } from '@src/store';
import React, { useMemo } from 'react';
import { NamedGridView } from '@src/containers/view_containers/NamedGridView/NamedGridView';

const StoreContainer: React.FunctionComponent = () => {
  const sections = useSelector(sectionsStore.selectors.getSections());

  const categories = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        name: section.name,
        items: section.CategoryModels.map((CategoryModel) => {
          return {
            name: CategoryModel.name,
            image_urls: CategoryModel.ImageModels.map((image) => image.url),
            description: CategoryModel.description,
          };
        }),
      })),

    [sections],
  );
  return (
    <>
      <NamedGridView title="Sections List" categories={categories} />
    </>
  );
};

export { StoreContainer };
