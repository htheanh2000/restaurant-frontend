import type { ReactNode } from 'react';

import type { IconName } from '../icon';

const STYLES = {
  primary: {
    bg: 'bg-green',
    'text-color': 'text-white',
    'icon-color': 'black',
  },
  secondary: {
    bg: 'bg-secondary',
    'text-color': 'text-white',
    'icon-color': 'white',
  },
  disable: {
    bg: 'bg-gray',
    'text-color': 'text-black',
    'icon-color': 'black',
  },
};

type TProps = {
  className?: string;
  children?: ReactNode;
  rightIcon?: IconName;
  leftIcon?: IconName;
  type?: keyof typeof STYLES;
  onClick?: () => void;
};

const Button = (props: TProps) => {
  const {
    children,
    type = 'primary',
    // leftIcon,
    // rightIcon,
    onClick,
    className,
  } = props;

  return (
    <div
      onClick={onClick}
      className={`flex ${className} cursor-pointer items-center justify-between ${STYLES[type].bg} rounded-full px-6 py-2`}
    >
      {/* {leftIcon && <Icon className="mr-3" color={STYLES[type]['icon-color']} name={leftIcon} />} */}
      <span className={`${STYLES[type]['text-color']}`}>{children}</span>
      {/* {rightIcon && <Icon className="ml-3" color={STYLES[type]['icon-color']} name={rightIcon} />} */}
    </div>
  );
};

export default Button;
