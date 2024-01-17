import Image from 'next/image'
import { facebook, instagram, linkedin, logo, twitter } from '../assets'

const Footer = () => {
  return (
    <div className="px-[10%] pb-10 pt-20 bg-[#0B0A0C99]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 pb-10 border-b-2 border-[#3F3E45]">
            <div className="">
                <Image 
                src={logo}
                alt='logo'
                />
            <p className="text-[#FFFFFFB2] text-lg mt-5 leading-10">
            A new way to make the payments easy, reliable and secure.
            </p>
            </div>
            <div className="">
            <h3 className='mb-10'>Usefull Links</h3>
            <ul className=' list-none text-[#FFFFFFB2] flex flex-col gap-5'>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Content</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>How it Works</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Create</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Explore</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Terms & Services</li>
            </ul>
            </div>
            <div className="">
            <h3 className='mb-10'>Community</h3>
            <ul className=' list-none text-[#FFFFFFB2] flex flex-col gap-5'>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Help Center</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Partners</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Suggestions</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Blog</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Newsletters</li>
            </ul>
            </div>
            <div className="">
            <h3 className='mb-10'>Partner</h3>
            <ul className=' list-none text-[#FFFFFFB2] flex flex-col gap-5'>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Our Partner</li>
                <li className='duration-300 text-[#FFFFFFB2] hover:text-white cursor-pointer'>Become a Partner</li>
            </ul>
            </div>
        </div>
        <div className="flex justify-between items-center mt-5">
        <p className="text-[#FFFFFFB2] leading-10">
            Created By <span className='main_color'>Hazem Ali</span>
        </p>
        <ul className='flex gap-5 items-center max-sm:gap-3'>
            <li>
                <Image
                src={instagram}
                alt='instagram'
                />
            </li>
            <li>
                <Image
                src={facebook}
                alt='facebook'
                />
            </li>
            <li>
                <Image
                src={twitter}
                alt='twitter'
                />
            </li>
            <li>
                <Image
                src={linkedin}
                alt='linkedin'
                />
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Footer