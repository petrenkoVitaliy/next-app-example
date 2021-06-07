import clsx from 'clsx';
import classnames from './index.module.scss';

enum TYPES {
  MEDIUM = 'MEDIUM',
}

const CLASSNAMES = {
  [TYPES.MEDIUM]: classnames.medium,
};

interface ButtonProps {
  text: string;
  type: TYPES;
  action?: () => void;
}

type Prototype = { Types: typeof TYPES };

const Button: React.FunctionComponent<ButtonProps> & Prototype = (props) => {
  const { text, action, type } = props;

  const handleClick = () => {
    action?.();
  };

  return (
    <button className={clsx(classnames.button, CLASSNAMES[type] || '')} onClick={handleClick}>
      {text}
    </button>
  );
};

Button.Types = TYPES;

export { Button };
