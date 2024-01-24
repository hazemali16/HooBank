import Image from 'next/image'
import { people01, people02, people03, quotes } from '../assets'

const People = () => {
  return (
    <div className="relative sm:w-[80%] w-full mx-auto max-sm:px-5 py-20 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 people translate-y-16 opacity-0">
              <div style={{background: "linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)"}} className="absolute w-[436.52px] h-[544.066px] rotate-[47.457deg] shrink-0 rounded-[200px] blur-[325px] top-[20%] -right-[30%]"></div>
        <div className="p-10 rounded-[20px] main_box people-box duration-500 opacity-0">
          <div className='h-[300px] flex flex-col justify-between'>
            <Image 
            src={quotes}
            alt='quotes'
            />
            <p className="text-lg leading-10 ">
            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
            </p>
            <div className="flex gap-5 items-center">
            <Image 
            src={people01}
            alt='people01'
            />
            <div className="">
              <h3 className="text-xl">Herman Jensen</h3>
              <p className='text-[#FFFFFFB2]'>Founder & Leader</p>
            </div>
            </div>
          </div>
        </div>
        <div  className="p-10 rounded-[20px] main_box people-box duration-500 opacity-0 delay-500">
          <div className='h-[300px] flex flex-col justify-between'>
            <Image 
            src={quotes}
            alt='quotes'
            />
            <p className="text-lg leading-10 ">
            Money makes your life easier. If you're lucky to have it, you're lucky.
            </p>
            <div className="flex gap-5 items-center">
            <Image 
            src={people02}
            alt='people02'
            />
            <div className="">
              <h3 className="text-xl">Steve Mark</h3>
              <p className='text-[#FFFFFFB2]'>Founder & Leader</p>
            </div>
            </div>
          </div>
        </div>
        <div  className="p-10 rounded-[20px] main_box people-box duration-500 opacity-0 delay-1000">
          <div className='h-[300px] flex flex-col justify-between'>
            <Image 
            src={quotes}
            alt='quotes'
            />
            <p className="text-lg leading-10 ">
            It is usually people in the money business, finance, and international trade that are really rich.
            </p>
            <div className="flex gap-5 items-center">
            <Image 
            src={people03}
            alt='people03'
            />
            <div className="">
              <h3 className="text-xl">Kenn Gallagher</h3>
              <p className='text-[#FFFFFFB2]'>Founder & Leader</p>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default People