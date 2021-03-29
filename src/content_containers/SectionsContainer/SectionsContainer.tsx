import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { sectionsStore } from '@src/store';
import { Card } from '@src/components/Card/Card';

import classnames from './index.module.scss';

interface SectionsContainerProps {}

const SectionsContainer: React.FunctionComponent<SectionsContainerProps> = () => {
  const sections = useSelector(sectionsStore.selectors.getSections());

  useEffect(() => {
    // console.log(sections);
  }, [sections]);

  return (
    <section className={classnames.sections}>
      <h1>Sections List</h1>

      {sections.map((section) => (
        <article key={section.id}>
          <h3>{section.name}</h3>

          <div className={classnames.categories_wrapper}>
            {section.CategoryModels.map((category) => (
              <Card
                key={category.name}
                name={category.name}
                image={category.image_url}
                id={category.name}
              />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default SectionsContainer;
