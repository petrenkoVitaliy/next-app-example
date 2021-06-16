import { CategoriesContainer } from '@src/containers/content_containers/CategoriesContainer/CategoriesContainer';
import { SchemaContainerProvider } from '@src/hocs/SchemaContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { GETTERS } from '@src/utils/getterRequests';
import { GetStaticProps } from 'next';

const CategoryPage: React.FunctionComponent = () => {
  return (
    <SchemaContainerProvider
      schema={SchemaContainerProvider.Schemas.SKELETON}
      containerProps={{ title: 'Category' }}
    >
      <CategoriesContainer />
    </SchemaContainerProvider>
  );
};

type StaticProps = { initialReduxState?: InitialStoreState };

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
  try {
    const items =
      params && params.category ? await GETTERS.getItems(params.category as string) : [];

    return { props: { initialReduxState: { sections: { items, sections: [], item: null } } } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};

export async function getStaticPaths() {
  const categories = await GETTERS.getCategories();

  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
