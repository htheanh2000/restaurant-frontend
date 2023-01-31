import IM_Login_bg from '@/assets/images/login-bg.png';
import IM_logo from '@/assets/images/logo-short.png';
import Button from '@/components/button';
import Icon from '@/components/icon';
import Input from '@/components/input';
import Image from 'next/image'
import Link from 'next/link';
const SignUpPage = () => {
    return (
        <div className=''>
            <Link href='/'><Image className='absolute left-4 top-4' src={IM_logo} alt='Logo Image' /></Link>
            <Image className='absolute right-0' src={IM_Login_bg} alt='Login Background Image' />
            <div className='p-32 max-w-xl'>
                <h1 className='text-5xl text-brown'>Sign up</h1>
                <p className='font-normal text-base text-brown'>Already have an account? <Link className='font-medium text-blue' href='/login'>Login</Link></p>
                <Input className='max-w-xs mt-8' placeholder='Full name' />
                <Input className='max-w-xs mt-8' placeholder='Email address' />
                <Input className='max-w-xs mt-8' placeholder='Password' type='password' />
                <div className='flex items-center justify-between mt-8'>
                    <div className='flex'>
                        <input  type='checkbox' id='remmember' name='remmember-me-check-box'/>
                        <label htmlFor="remmember" className='cursor-pointer text-base font-normal text-brown ml-2'>Remember me</label>
                    </div>
                    <Link className='text-brown' href='/forgot-pasword'>Forgot Password?</Link>
                </div>
                <Button className='mt-8 rounded' type='secondary'>Sign up</Button>
                <Button className='mt-8 rounded bg-white border border-gray' type='white' >
                    <div className='flex items-center'>
                        <Icon name='google' size='sm' className='mr-4'/> Sign up with google
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default SignUpPage