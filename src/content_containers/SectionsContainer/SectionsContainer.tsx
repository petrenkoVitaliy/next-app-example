import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { sectionsStore } from '@src/store';

interface SectionsContainerProps {}

const SectionsContainer: React.FunctionComponent<SectionsContainerProps> = () => {
  const sections = useSelector(sectionsStore.selectors.getSections());

  useEffect(() => {
    // console.log(sections);
  }, [sections]);

  return (
    <div>
      <h1>Sections List</h1>
      <div>
        {sections.map((section) => (
          <div key={section.id} className="border-2 border-blue-600 border-solid mb-2">
            <div>{section.name}</div>
            <div>
              {section.CategoryModels.map((category) => (
                <div key={category.id} className="px-5">
                  <Link href={`/store/${category.name}`}>{category.name}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionsContainer;
