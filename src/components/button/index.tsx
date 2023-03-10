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
  style?: keyof typeof STYLES;
  size?: keyof typeof SIZES;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" ;
  disabled?: boolean
};

const Button = (props: TProps) => {
  const {
    children,
    style = 'primary',
    onClick,
    className = '',
    size = 'md',
    type = 'button',
    disabled = false,
  } = props;

  return (
    <button
     type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex cursor-pointer w-full items-center justify-center ${STYLES[style].bg} rounded ${SIZES[size]} text-base font-semibold ${STYLES[style]['text-color']} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
