import Button from "@/components/button"
import Footer from "@/layouts/footer"
import Header from "@/layouts/header"
import Image from "next/image"
import IM_1 from '../assets/images/reservation/1.png'
import DatePicker from "@/components/datepicker"
import Dropdown, {Option} from "@/components/dropdown"
import Reservation from "@/components/reservation"
import { useState } from "react"
const ReservationPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const options:Option[] = [
        {
            value: 1,
            label: 'single (1 person)',
        },
        {
            value: 2,
            label: 'couple (2 person)',
        },
        {
            value: 4,
            label: 'mini group (3-4 person)',
        },
        {
            value: 6,
            label: 'medium group (5-8 person)',
        },
        {
            value: 8,
            label: 'large group (9-12 person)',
        },
        {
            value: 13,
            label: 'Party (12-20) person',
        },
        {
            value: 20,
            label: 'Custom',
        },

    ]
    return (
        <div>
            <Header/>
            <div className="flex flex-wrap my-16 items-center justify-around">
                <Image src={IM_1} alt={'IM_1'}/>
                <div className="">
                    <h1>Book a table</h1>
                    <DatePicker placeholderText="Select a date" className="mt-8"/>
                    <DatePicker 
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    showTimeSelect showTimeSelectOnly placeholderText="Select a time" className="mt-8"/>
                    <Dropdown placeholder="Party size" options={options} className='mt-8'/>
                    <Button style='secondary' className='mt-8' onClick={() => setIsOpen(true)}>Book now</Button>
                </div>
            </div>
            {
                isOpen &&
            <Reservation onClose={() => {
                setIsOpen(false)
            }}/>
            }
            <Footer/>
        </div>
    )
}

export default ReservationPage