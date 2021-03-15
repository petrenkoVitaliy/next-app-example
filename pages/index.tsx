import ContentContainerProvider from 'hocs/ContentContainerProvider';
import SchemaContainerProvider from 'hocs/SchemaContainerProvider';

const HomePage: React.FunctionComponent = () => (
  <SchemaContainerProvider
    schema={SchemaContainerProvider.Schemas.SKELETON}
    containerProps={{ title: 'Home' }}
  >
    <ContentContainerProvider schema={ContentContainerProvider.Schemas.BLOG} containerProps={{}} />
  </SchemaContainerProvider>
);

export default HomePage;
