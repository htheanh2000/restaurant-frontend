import Image from 'next/image';
import Link from 'next/link';

import IM_logo from '@/assets/images/logo.png';

import Button from '../button';
import Icon from '../icon';

const LINKS = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'About us',
    url: '/about-us',
  },
  {
    name: 'Order online',
    url: '/order-online',
  },
  {
    name: 'Reservation',
    url: '/reservation',
  },
  {
    name: 'Contact us',
    url: '/contact-us',
  },
];

const Header = () => {
  return (
    <div className="container mx-auto mt-8 flex items-center justify-between">
      <Image src={IM_logo} alt="Restaurant Logo" />
      <nav>
        <ul>
          {LINKS.map((link) => (
            <Link
              className="cursor-pointer px-4 py-2 text-black decoration-0 hover:text-orange hover:no-underline"
              key={link.url}
              href={link.url}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="rounded-full bg-gray/10 p-2">
          <Icon name="cart" />
        </div>
        <Button className="ml-6">Login</Button>
      </div>
    </div>
  );
};

export default Header;
