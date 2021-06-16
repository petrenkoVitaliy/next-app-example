import classnames from './index.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  items: { name: string; link: string }[];
}

export const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { items } = props;

  return (
    <div className={classnames.footer_wrapper}>
      <footer className={classnames.footer}>
        <div className={classnames.footer_logo}>
          <h3>Logo</h3>

          <Image src="/assets/images/logo_tmp.png" height={100} width={100} />
          <p>This is footer</p>
        </div>

        <div className={classnames.footer_nav}>
          <h3>Store</h3>

          <ul className={classnames.navbar_wrapper}>
            {items.map(({ link, name }) => (
              <li key={name}>
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={classnames.footer_contacts}>
          <h3>Contacts</h3>

          <p>12312312312</p>
          <p>contact1@gmail.com</p>
          <p>contact1.contact1</p>
        </div>
      </footer>
    </div>
  );
};
