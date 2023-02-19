import Header from '@/layouts/header'
import Image from 'next/image'
import IM_1 from '../assets/images/about-us/1.png'
import IM_2 from '../assets/images/about-us/2.png'
import IM_Owner from '../assets/images/about-us/owner.png'
import IM_left from '../assets/images/about-us/left.png'
import IM_right from '../assets/images/about-us/right.png'
import Footer from '@/layouts/footer'
const AboutUs = () => {
    return (
        <div >
            <Header/>
            <div className='mt-16 flex flex-wrap justify-around items-center'>
                <Image alt='IM_1' src={IM_1}/>
                <div className='max-w-lg'>
                    <h1 className='mb-8'><span className='text-orange'>Our</span> <br/> restaurant</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
            </div>
            <div className='mt-16 flex flex-wrap justify-evenly items-center'>
                <div className='max-w-lg'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
                <Image alt='IM_2' src={IM_2}/>
            </div>
            <div className='mx-auto mb-16 flex justify-around mt-16'>
                <Image alt='Owner' src={IM_Owner}/>
                <div className='max-w-lg'>
                    <h1><span className='text-orange'>Owner</span> &<br/> Excutive Chef</h1>
                    <h3 className='text-3xl font-bold mt-8'>Ismail Marzuki</h3>
                    <div className='mt-8'>
                        <Image className='mb-4' alt="IM_left" src={IM_left}/>
                        <p className='mx-1 italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Image className="float-right" alt="IM_right" src={IM_right}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default  AboutUs