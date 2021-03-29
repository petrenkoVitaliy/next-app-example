import { getCategoriesProvider } from '@server/controllers/categories';
import { getItemsByCategoryProvider } from '@server/controllers/items';
import ContentContainerProvider from '@src/hocs/ContentContainerProvider';
import SchemaContainerProvider from '@src/hocs/SchemaContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { validateModel } from '@src/utils/apiRequests/validators';
import { itemsSchema } from '@src/utils/apiRequests/validators/items.schema';
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
    const itemsResponse =
      params && params.category
        ? await getItemsByCategoryProvider.getter({ categoryName: params.category as string })
        : [];

    const items = validateModel(itemsSchema)(itemsResponse);

    return { props: { initialReduxState: { sections: { items, sections: [] } } } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export async function getStaticPaths() {
  const categories = await getCategoriesProvider.getter(undefined);

  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
