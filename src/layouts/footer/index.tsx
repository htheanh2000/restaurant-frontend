import Image from "next/image"
import IM_Logo from '@/assets/images/logo-white-text.png'
import Icon, { IconName } from "@/components/icon"

type TSocial = {
    url: string,
    icon: IconName
}

const SOCIALs: TSocial[] = [
    {
        url: '/',
        icon: 'twitter'
    },
    {
        url: '/',
        icon: 'facebook'
    },
    {
        url: '/',
        icon: 'instagram'
    }
]

const PAGE_LINKS = [
    {
        url: '/',
        name: 'home'
    },
    {
        url: '/',
        name: 'menu'
    },
    {
        url: '/',
        name: 'order online'
    },
    {
        url: '/',
        name: 'catering'
    },
    {
        url: '/',
        name: 'reservation'
    },

]


const LINKS = [
    {
        title: 'Page',
        data: PAGE_LINKS
    },
    {
        title: 'Information',
        data: PAGE_LINKS
    },
    {
        title: 'Get in touch',
        data: PAGE_LINKS
    }
]

const Footer = () => {
    return (
        <section className="bg-brown">
            <div className="container mx-auto py-32 flex justify-between ">
                <div>
                    <Image src={IM_Logo} alt='logo' />
                    <p className="text-white max-w-xs mt-4 text-xl font-light leading-loose">Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                    <div className="flex mt-4">
                        {
                            SOCIALs.map(social => 
                            <Icon className="bg-gray p-3 rounded-full mr-8 cursor-pointer" key={social.icon} name={social.icon} />)
                        }
                    </div>
                </div>
                {
                    LINKS.map(col => <div key={col.title}>
                        <h5 className="text-orange font-semibold text-xl mb-8">{col.title}</h5>
                        <div className="flex flex-col">
                            {
                                col.data.map(link => <a key={link.name} className="text-xl capitalize font-light text-white my-2" href={link.url}>{link.name}</a>)
                            }
                        </div>
                    </div>)
                }
            </div>

        </section>
    )
}

export default Footer