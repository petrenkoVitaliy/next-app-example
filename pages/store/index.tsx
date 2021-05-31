import { GetStaticProps } from 'next';

import { SchemaContainerProvider } from '@src/hocs/SchemaContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { GETTERS } from '@src/utils/getterRequests';
import { StoreContainer } from '@src/containers/content_containers/StoreContainer/StoreContainer';

const StorePage: React.FunctionComponent = () => {
  return (
    <SchemaContainerProvider
      schema={SchemaContainerProvider.Schemas.SKELETON}
      containerProps={{ title: 'Store' }}
    >
      <StoreContainer />
    </SchemaContainerProvider>
  );
};

type StaticProps = { initialReduxState?: InitialStoreState };

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const sections = await GETTERS.getSections();

    return { props: { initialReduxState: { sections: { sections, items: [], item: null } } } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default StorePage;
