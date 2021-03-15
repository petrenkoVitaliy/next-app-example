import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { Category } from '../../interfaces/category.interface';
import { API } from '../../utils/apiRequests';

type StaticProps = {
  categories: Category[];
};

type Props = {
  item: number;
} & StaticProps;

const StorePage: React.FunctionComponent<Props> = (props) => {
  return (
    <Layout title="Store">
      <h1>Store</h1>
      {props.categories.map(({ id, name }) => (
        <Fragment key={id}>
          <Link href={`/store/${name}`}>{name}</Link>
          <br />
        </Fragment>
      ))}
    </Layout>
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
