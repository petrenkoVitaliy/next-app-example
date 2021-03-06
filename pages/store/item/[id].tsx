import { SchemaContainerProvider } from '@src/hocs/SchemaContainerProvider';
import { ItemContainer } from '@src/containers/content_containers/ItemContainer/ItemContainer';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { GETTERS } from '@src/utils/getterRequests';
import { GetStaticProps } from 'next';

const ItemPage: React.FunctionComponent = () => {
  return (
    <SchemaContainerProvider
      schema={SchemaContainerProvider.Schemas.SKELETON}
      containerProps={{ title: 'Category' }}
    >
      <ItemContainer />
    </SchemaContainerProvider>
  );
};

type StaticProps = { initialReduxState?: InitialStoreState };

export const getStaticProps: GetStaticProps<StaticProps> = async ({ params }) => {
  try {
    const item = params && params.id ? await GETTERS.getItem(Number(params.id)) : null;

    return {
      props: { initialReduxState: { sections: { items: [], sections: [], item } } },
    };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
};

export async function getStaticPaths() {
  const items = await GETTERS.getAllItems();

  const paths = items.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ItemPage;
