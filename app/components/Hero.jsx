import Image from 'next/image'
import { discount } from '../assets'
import { robot } from '../assets'
import { arrowUp } from '../assets'
import { circle } from '../assets'

const Hero = () => {
  return (
    <div className="h-screen flex items-center overflow-hidden relative animate-opacity-top translate-y-16 opacity-0">
        <div className="bg-white absolute w-[195px] h-[324px] shrink-0 rounded-[324px] blur-[200px] top-[30%] -left-10"></div>
        <div className="bg-[#FFFFFF99] absolute w-[405px] h-[471px] shrink-0 rounded-[324px] blur-[100px] top-[5%] right-10"></div>
        <div style={{background: "linear-gradient(90deg, rgba(26, 41, 128, 0.50) 0%, rgba(38, 208, 206, 0.50) 100%)"}} className="rounded-[200px] absolute w-[482.59px] h-[615.14px] shrink-0 blur-[200px] top-[15%] -right-10 -rotate-[67.37deg]"></div>
        <div style={{background: "linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)"}} className="-top-[50%]  bg-white absolute w-[345px] h-[514px] rounded-[200px] shrink-0 -rotate-[20.01deg] blur-[350px] right-10"></div>
        <div className='lg:basis-[60%] basis-[100%] md:pl-[10%] pl-5 max-md:pr-5 relative'>
            <div className='absolute w-fit rounded-full right-[18%] top-[20%] hidden xl:block cursor-pointer'>
            <Image 
            src={circle}
            alt='circle'
            />
            <div className="font-bold text-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] main_color">
            <span className='flex gap-2'>Get 
            <Image 
            src={arrowUp}
            alt='arrowUp'
            />
            </span>
            Started
            </div>
            </div>
            <div style={{background: "linear-gradient(125deg, #272727 0%, #11101D 100%)"}} className='text-[#FFFFFF99] flex items-center sm:gap-5 gap-2 w-fit pl-3 max-sm:py-3 sm:pr-5 pr-3 min-h-10 rounded-[10px]'>
            <Image 
            src={discount}
            alt='discount'
            />
            <div>
            <span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT
            </div>
            </div>
            <h1 className='xl:text-[72px] text-[50px] font-bold my-5 max-sm:text-[30px]'>
            The Next<br /><span className='main_color'>Generation</span><br />Payment Method.
            </h1>
            <p className='text-lg sm:w-[50%] w-fit text-[#FFFFFFB2]'>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
            </p>
        </div>
        <div className='basis-[40%] hidden lg:block'>
            <Image 
            src={robot}
            alt='robot'
            width={760}
            height={674}
            />
        </div>
    </div>
  )
}

export default Hero