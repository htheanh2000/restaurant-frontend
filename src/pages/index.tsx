import Header from '@/layouts/header';
import Image from 'next/image';
import IM_section_1 from '@/assets/images/homepage/section-1.png'
import IM_section_2 from '@/assets/images/homepage/section-2.png'
import IM_section_4 from '@/assets/images/homepage/section-4.png'
import IM_section_7 from '@/assets/images/homepage/section-7.png'
import IM_chef_1 from '@/assets/images/chef/1.png'
import IM_chef_2 from '@/assets/images/chef/2.png'
import IM_chef_3 from '@/assets/images/chef/3.png'
import IM_section_6 from '@/assets/images/homepage/bubble-bg.png'
import IM_customer_1 from '@/assets/images/homepage/customer-1.png'
import IM_user_1 from '@/assets/images/homepage/user.png'
import Button from '@/components/button';
import Menu from '@/layouts/menu';
import Footer from '@/layouts/footer';

const CHEFS = [
   {
      name: "Betran Komar",
      position: 'Head chef',
      image: IM_chef_1
   },
   {
      name: "Ferry Sauwi",
      position: 'Chef',
      image: IM_chef_2
   },
   {
      name: "Iswan Dracho",
      position: 'Chef',
      image: IM_chef_3
   }
]

const Index = () => {
   return (
      <div>
         <Header />
         {/* Section 1 */}
         <section className='container px-8 mx-auto min-h-screen flex max-desktop:flex-col items-center'>
            <div className='mb-16 max-desktop:mt-16'>
               <span className='label'>Restaurant</span>
               <h1 className='text-brown my-8'>Italian <br /> Cuisine</h1>
               <p className='max-w-lg'>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
               <div className='flex flex-row mt-16'>
                  <Button size='lg' className='mr-4' type='secondary'>Order Now</Button>
                  <Button size='lg'>Reservation</Button>
               </div>
            </div>
            <div>
               <Image src={IM_section_1} alt='Noodles' />
            </div>
         </section>

         {/* Section 2 */}
         <section className='bg-green/10'>
            <div className='container justify-between px-8 mx-auto min-h-screen flex flex-row-reverse max-desktop:flex-col items-center'>
               <div className='max-w-md mb-16 max-desktop:mt-16'>
                  <h1 className='text-brown my-8'>Welcome to <span className='text-orange'>delizioso</span></h1>
                  <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies
                     at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
                  <div className='flex flex-row mt-16'>
                     <Button size='lg' className='mr-4' type='secondary'>See our menu</Button>
                  </div>
               </div>
               <div>
                  <Image className='max-w-md' src={IM_section_2} alt='Noodles' />
               </div>
            </div>
         </section>

         {/* Section 3 */}
         <section className='container mx-auto min-h-screen'>
            <h1 className='text-brown my-8 mt-24 text-center'>Our Popular menu</h1>
            <Menu />
         </section>

         {/* Section 4 */}
         <section className='bg-green/10'>
            <div className='container px-0 mx-auto min-h-screen flex flex-row-reverse max-desktop:flex-col items-center'>
               <div className='mb-16 max-desktop:mt-16'>
                  <h1 className='text-brown my-8'>Let&apos;s reserve <br /> <span  className='text-orange'>a table</span></h1>
                  <p className='max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies
                     at eleifend proin. Congue nibh nulla malesuada ultricies nec quam</p>
                  <div className='flex flex-row mt-16'>
                     <Button size='lg' className='mr-4' type='secondary'>See our menu</Button>
                  </div>
               </div>
               <div>
                  <Image className='desktop:-ml-8 max-w-lg' src={IM_section_4} alt='Noodles' />
               </div>
            </div>
         </section>

         {/* Section 5 */}
         <section >
            <h1 className='text-brown my-8 text-center mt-16'>Our greatest chef</h1>
            <div className='flex justify-evenly mt-24 mb-16'>
               {
                  CHEFS.map(chef => <div key={chef.name}>
                     <Image src={chef.image} alt={chef.name} />
                     <p className='text-center font-bold my-4'>{chef.name}</p>
                     <p className='text-center'>{chef.position}</p>
                  </div>)
               }
            </div>

            <Button size='lg' className='w-fit mx-auto mb-32' type='secondary'>View All</Button>
         </section>


         {/* Section 6 */}
         <section className='overflow-hidden' >
            <Image src={IM_section_6} alt='IM_section_6' className='w-full absolute' />
            <h1 className='text-brown my-8 text-center mt-16'>Our customers say</h1>
            <div className='flex flex-col items-center'>

               <Image src={IM_customer_1} alt='IM_customer_1' className='mt-16' />
               <h4 className='font-bold text-xl text-brown mt-8'>Starla Virgoun</h4>
               <p className='text-base mt-2 text-brown'>Financial advisor</p>
               <p className='text-base mt-4 max-w-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
               <Image src={IM_user_1} alt='IM_user_1' className='mt-4' />
            </div>
         </section>

         {/*Section 7 */}
         <section className='min-h-[900px] py-8'>
            <div className='relative mt-32'>
               <Image src={IM_section_7} alt='IM_section_7' className='absolute  -z-10 left-1/2 top-0 -translate-x-2/4'/>
               <p className='text-6xl pt-8 font-bold text-white text-center'>we are open from</p>
               <p className='text-4xl pt-8 font-medium text-white text-center'>Monday-Sunday</p>
               <p className='text-2xl pt-4 text-white text-center'>Launch : Mon-Sun : 11:00am-02:00pm</p>
               <p className='text-2xl pt-4 text-white text-center'>Dinner : sunday : 04:00pm-08:00pm</p>
               <p className='text-2xl pt-4 text-white text-center'>04:00pm-09:00pm</p>
               <div className='flex mx-auto w-fit mt-8'>
                  <Button className='mr-4' type='secondary' size='lg'>Order</Button>
                  <Button className='' size='lg'>Reservation</Button>
               </div>
            </div>
         </section>

         <Footer/>
      </div>
   );
};

export default Index;
