import IM_Customer_waiting from '@/assets/images/customers-waiting-for-food.svg'
import Button from '@/components/button'
import Image from 'next/image'
import { useRouter } from 'next/router'
const OrderSuccessfully = () => {
    const router = useRouter()

    const handleGoBack = () => {
        router.push('/')
    }
    return(


        <div className='container mx-auto h-screen flex flex-col justify-center items-center'>
            <Image src={IM_Customer_waiting} alt='IM_Customer_waiting'/>
            <h4 className='text-3xl  mt-8 text-center'>Thank you for placing your food order with us! We have received your order and are working hard to ensure that your meal is prepared to your satisfaction.</h4>
            <Button onClick={handleGoBack} className='mt-8 w-96' style='secondary'  size='lg'>Go back to homepage</Button>
        </div>
    )
}

export default OrderSuccessfully