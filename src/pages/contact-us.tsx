import Button from "@/components/button"
import Input from "@/components/input"
import Footer from "@/layouts/footer"
import Header from "@/layouts/header"
import Image from "next/image"
import IM_map from '../assets/images/contact-us/map.png'
const ContactUs = () => {
    return (
        <div>
            <Header/>
            <div className="container mx-auto flex flex-col items-center mb-16">
               <h2 className="text-6xl font-medium mt-16"> Contact Us </h2>
                <p className="max-w-3xl text-center font-normal mt-4">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
                <div className="mt-8 flex flex-wrap justify-between">
                    <Input className="w-1/2 max-desktop:w-full px-4" placeholder="First name"/>
                    <Input className="w-1/2 max-desktop:w-full px-4" placeholder="Last name"/>
                    <Input className="w-1/2 max-desktop:w-full px-4" placeholder="Email Address"/>
                    <Input className="w-1/2 max-desktop:w-full px-4" placeholder="Subject"/>
                    <textarea rows={10} placeholder="Message" 
                    className={`mt-8 w-full mx-4 px-4 py-3 cursor-pointer base-text text-gray outline rounded  outline-1 outline-gray focus:outline-primary`}/>
                </div>
                <Button type='secondary' size='lg' className="rounded-lg mt-16 w-80">Submit</Button>
            </div>
            <Image src={IM_map} alt='map'/>
            <Footer/>
        </div>
    )
}

export default ContactUs