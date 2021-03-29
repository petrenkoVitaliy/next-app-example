import { GetStaticProps } from 'next';

import { validateModel } from '@src/utils/apiRequests/validators';

import SchemaContainerProvider from '@src/hocs/SchemaContainerProvider';
import ContentContainerProvider from '@src/hocs/ContentContainerProvider';
import { InitialStoreState } from '@src/interfaces/reducer.interface';
import { getSectionsProvider } from '@server/controllers/sections';
import { sectionsSchema } from '@src/utils/apiRequests/validators/sections.schema';

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
    const sectionsResponse = await getSectionsProvider.getter(undefined);
    const sections = validateModel(sectionsSchema)(sectionsResponse);

    return { props: { initialReduxState: { sections: { sections, items: [] } } } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default StorePage;
