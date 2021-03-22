import ContentContainerProvider from '@src/hocs/ContentContainerProvider';
import SchemaContainerProvider from '@src/hocs/SchemaContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { API } from '@src/utils/apiRequests';
import { GetStaticProps } from 'next';

const CategoryPage: React.FunctionComponent = () => {
  return (
    <SchemaContainerProvider
      schema={SchemaContainerProvider.Schemas.SKELETON}
      containerProps={{ title: 'Category' }}
    >
      <ContentContainerProvider
        schema={ContentContainerProvider.Schemas.CATEGORY}
        containerProps={{}}
      />
    </SchemaContainerProvider>
  );
};

type StaticProps = { initialReduxState?: InitialStoreState };

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
  try {
    const items = params && params.category ? await API.getItems(params.category as string) : [];
    return { props: { initialReduxState: { sections: { items, sections: [] } } } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export async function getStaticPaths() {
  const categories = await API.getCategories();

  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
