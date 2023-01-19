import Header from '@/components/header';
import Image from 'next/image';
import IM_section_1 from '@/assets/images/homepage/section-1.png'
import IM_section_2 from '@/assets/images/homepage/section-2.png'
import IM_section_4 from '@/assets/images/homepage/section-4.png'
import Button from '@/components/button';
import Menu from '@/layouts/menu';
const Index = () => {
  return (
    <div>
      <Header />
      {/* Section 1 */}
      <section className='container px-8 mx-auto min-h-screen flex max-desktop:flex-col items-center'>
          <div className='mb-16 max-desktop:mt-16'>
             <span className='label'>Restaurant</span>
             <h1 className='text-brown my-8'>Italian <br/> Cuisine</h1>
             <p className='max-w-lg'>Lorem ipsum dolor sit amet, consectetur 
             adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
             <div className='flex flex-row mt-16'>
                <Button size='lg' className='mr-4' type='secondary'>Order Now</Button>
                <Button size='lg'>Reservation</Button>
             </div>
          </div>
          <div>
            <Image src={IM_section_1} alt='Noodles'/>
          </div>
      </section>

      {/* Section 2 */}
      <section className='bg-green/10'>
          <div className='container justify-between px-8 mx-auto min-h-screen flex flex-row-reverse max-desktop:flex-col items-center'>
          <div className='max-w-md mb-16 max-desktop:mt-16'>
             <h1 className='text-brown my-8'>Welcome to<br/><h1 className='text-orange'>delizioso</h1></h1>
             <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies 
             at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
             <div className='flex flex-row mt-16'>
                <Button size='lg' className='mr-4' type='secondary'>See our menu</Button>
             </div>
          </div>
          <div>
            <Image className='max-w-md' src={IM_section_2} alt='Noodles'/>
          </div>
          </div>
      </section>

      {/* Section 3 */}
      <section className='container mx-auto min-h-screen'>
      <h1 className='text-brown my-8 mt-24 text-center'>Our Popular menu</h1>
      <Menu/>
      </section>

       {/* Section 4 */}
       <section className='bg-green/10'>
          <div className='container px-0 mx-auto min-h-screen flex flex-row-reverse max-desktop:flex-col items-center'>
          <div className='mb-16 max-desktop:mt-16'>
             <h1 className='text-brown my-8'>Let&apos;s reserve <br/> <h1 className='text-orange'>a table</h1></h1>
             <p className='max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies 
             at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
             <div className='flex flex-row mt-16'>
                <Button size='lg' className='mr-4' type='secondary'>See our menu</Button>
             </div>
          </div>
          <div>
            <Image className='desktop:-ml-8 max-w-lg' src={IM_section_4} alt='Noodles'/>
          </div>
          </div>
      </section>
    </div>
  );
};

export default Index;
