import { HomeContainer } from '@src/containers/content_containers/HomeContainer/HomeContainer';
import { SchemaContainerProvider } from '@src/hocs/SchemaContainerProvider';

const HomePage: React.FunctionComponent = () => (
  <SchemaContainerProvider
    schema={SchemaContainerProvider.Schemas.SKELETON}
    containerProps={{ title: 'Home' }}
  >
    <HomeContainer />
  </SchemaContainerProvider>
);

export default HomePage;
