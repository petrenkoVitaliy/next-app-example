import { SkeletonSchema } from '@src/schema_containers/SkeletonSchema/SkeletonSchema';

const ItemPage: React.FunctionComponent = () => {
  return (
    <SkeletonSchema title="Item">
      <h1>Item</h1>
      <p></p>
    </SkeletonSchema>
  );
};

export default ItemPage;
