import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';

import { SkeletonSchema } from 'schema_containers/SkeletonSchema/SkeletonSchema';
import { Category } from 'interfaces/category.interface';
import { API } from 'utils/apiRequests';

type StaticProps = {
  categories: Category[];
};

type Props = {
  item: number;
} & StaticProps;

const StorePage: React.FunctionComponent<Props> = (props) => {
  return (
    <SkeletonSchema title="Store">
      <h1>Store</h1>
      {props.categories.map(({ id, name }) => (
        <Fragment key={id}>
          <Link href={`/store/${name}`}>{name}</Link>
          <br />
        </Fragment>
      ))}
    </SkeletonSchema>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const categories = await API.getCategories();

    return { props: { categories } };
  } catch (err) {
    return { props: { categories: [] } };
  }
};

export default StorePage;
