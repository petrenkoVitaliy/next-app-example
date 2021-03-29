import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import classnames from './index.module.scss';

interface NavBarProps {
  items: { name: string; link: string }[];
}

export const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
  const { items } = props;

  const router = useRouter();

  return (
    <div className={classnames.navbar_wrapper}>
      <ul className={classnames.navbar}>
        {items.slice(0, 2).map(({ link, name }) => (
          <li
            key={name}
            className={clsx({
              [classnames.selected]: router.pathname === link,
            })}
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}

        <div className={classnames.logo}>items store</div>

        {items.slice(2).map(({ link, name }) => (
          <li
            key={name}
            className={clsx({
              [classnames.selected]: router.pathname === link,
            })}
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
