import { GetStaticProps } from 'next';
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import { SkeletonSchema } from '@src/schema_containers/SkeletonSchema/SkeletonSchema';
import { API } from '@src/utils/apiRequests';
import { commonStore } from '@src/store';
import { CategoryAttributes } from 'models/category';

type StaticProps = {
  categories: CategoryAttributes[];
};

type Props = {
  item: number;
} & StaticProps;

const StorePage: React.FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();

  const message = useSelector(commonStore.selectors.getMessage());

  const handleClick = () => {
    dispatch(commonStore.thunks.setMessage());
  };

  useEffect(() => {
    // console.log(message);
  }, [message]);

  return (
    <SkeletonSchema title="Store">
      <h1>Store</h1>
      <button onClick={handleClick}>BBB</button>
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

    return { props: { categories, initialReduxState: { common: { message: 'init' } } } };
  } catch (err) {
    return { props: { categories: [] } };
  }
};

export default StorePage;
