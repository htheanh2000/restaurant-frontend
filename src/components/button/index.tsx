import type { ReactNode } from 'react';

const STYLES = {
  primary: {
    bg: 'bg-green',
    'text-color': 'text-white',
  },
  secondary: {
    bg: 'bg-orange',
    'text-color': 'text-white',
  },
  white: {
    bg: 'bg-white',
    'text-color': 'text-black',
  },
  disable: {
    bg: 'bg-gray',
    'text-color': 'text-black',
  },
};

const SIZES = {
  md : 'px-6 py-2',
  lg: 'px-10 py-4'
}

type TProps = {
  className?: string;
  children?: ReactNode;
  type?: keyof typeof STYLES;
  size?: keyof typeof SIZES;
  onClick?: () => void;
};

const Button = (props: TProps) => {
  const {
    children,
    type = 'primary',
    onClick,
    className = '',
    size = 'md',
  } = props;

  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center ${STYLES[type].bg} rounded-full ${SIZES[size]} ${className}`}
    >
      <span className={`text-base font-semibold ${STYLES[type]['text-color']}`}>{children}</span>
    </div>
  );
};

export default Button;
