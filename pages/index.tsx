import ContentContainerProvider from '@src/hocs/ContentContainerProvider';
import SchemaContainerProvider from '@src/hocs/SchemaContainerProvider';

const HomePage: React.FunctionComponent = () => (
  <SchemaContainerProvider
    schema={SchemaContainerProvider.Schemas.SKELETON}
    containerProps={{ title: 'Home' }}
  >
    <ContentContainerProvider schema={ContentContainerProvider.Schemas.BLOG} containerProps={{}} />
  </SchemaContainerProvider>
);

export default HomePage;
