import ellipses from '../../assets/icons/ellipses.svg'
import facebook from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import left from '../../assets/icons/left.svg'
import menu from '../../assets/icons/menu.svg'
import right from '../../assets/icons/right.svg'
import starOutline from '../../assets/icons/star-outline.svg'
import star from '../../assets/icons/star.svg'
import twitter from '../../assets/icons/twitter.svg'
import cart from '../../assets/icons/cart.svg'
import close from '../../assets/icons/close.svg'
import calendar from '../../assets/icons/calendar.svg'
import clock from '../../assets/icons/clock.svg'
import people from '../../assets/icons/people.svg'
import Image from 'next/image'

type Props = {
  color?: string // default: black
  name: IconName
  className?: string
  size?: keyof typeof IconSize
}

type IconName = keyof typeof icons

export const icons = {
  star: star,
  ellipses:ellipses,
  facebook: facebook,
  google: google,
  instagram: instagram,
  left: left,
  menu: menu,
  right: right,
  "star-outline": starOutline,
  twitter: twitter,
  cart:cart,
  close:close,
  calendar: calendar,
  clock: clock,
  people: people,
}

const IconSize = {
  sx: 16,
  sm: 24, // default size
  md: 32,
  lg: 40,
}

const Icon = (props: Props) => {
  const { name, size = 'sm', className } = props
 
  return (
    <div>
            <Image
                src={icons[name]}
                className={`cursor-pointer ${className}`}
                alt={`Icon ${name}`}
                width={IconSize[size]}
                height={IconSize[size]}
                
            />
    </div>
  )
}

export type { IconName }

export default Icon
