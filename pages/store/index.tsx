import { GetStaticProps } from 'next';

import SchemaContainerProvider from '@src/hocs/SchemaContainerProvider';
import ContentContainerProvider from '@src/hocs/ContentContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { GETTERS } from '@src/utils/getterRequests';

const StorePage: React.FunctionComponent = () => {
  return (
    <SchemaContainerProvider
      schema={SchemaContainerProvider.Schemas.SKELETON}
      containerProps={{ title: 'Store' }}
    >
      <ContentContainerProvider
        schema={ContentContainerProvider.Schemas.SECTIONS}
        containerProps={{}}
      />
    </SchemaContainerProvider>
  );
};

type StaticProps = { initialReduxState?: InitialStoreState };

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const sections = await GETTERS.getSections();

    return { props: { initialReduxState: { sections: { sections, items: [] } } } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default StorePage;
