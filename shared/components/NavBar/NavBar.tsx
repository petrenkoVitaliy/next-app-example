import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';

interface NavBarProps {
  items: { name: string; link: string }[];
}

const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
  const { items } = props;

  const router = useRouter();

  return (
    <ul className="w-full bg-red-500 flex justify-start">
      {items.map(({ link, name }) => (
        <li
          key={name}
          className={classnames('mr-4', {
            'border-b-2 border-blue-600 border-solid': router.pathname === link,
          })}
        >
          <Link href={link}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
