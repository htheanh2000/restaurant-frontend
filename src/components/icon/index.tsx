import Image from 'next/image';

type Props = {
  color?: string; // default: black
  name: IconName;
  className?: string;
  size?: keyof typeof IconSize;
};

type IconName = 'cart' | 'menu' | 'star' | 'star-outline' | 'left' | 'right' | 'ellipses' | 'twitter' | 'facebook' | 'instagram' | 'google';

type IObject = {
  [key: string]: any;
};
const context = require.context('@/assets/icons', false, /\.(png|jpe?g|svg)$/);

const icons: IObject = {};
// Import all svg icons ! Is there any way better, and is it better than import manually ????
context.keys().forEach((key: string) => {
  const splitname = key?.split('./');
  if (splitname.length === 1) return;
  const name = splitname
    ?.pop() // remove the first 2 characters
    ?.substring(0, key.length - 6); // remove the file extension
  if (!name) return;
  icons[name] = context(key);
});

const IconSize = {
  sx: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
};

const Icon = (props: Props) => {
  const { name, className = '' , size='sm'} = props;
  return (
    <div className={className}>
      <Image width={IconSize[size]} height={IconSize[size]} src={icons[name]} alt="icons" />
    </div>
  );
};

export type { IconName };

export default Icon;
