import Image from 'next/image'
import { apple, bill, google } from '../assets'

const Billing = () => {
  return (
    <div id='features' className="billing sm:w-[80%] w-full mx-auto max-sm:px-5 flex items-center gap-40 relative max-lg:flex-col translate-y-16 opacity-0">
        <div className="bg-[#FFFFFF99] absolute w-[405px] h-[471px] rotate-[176.617deg] shrink-0 rounded-[471px] blur-[200px] -top-16 -left-[40%]"></div>
        <div style={{background: "linear-gradient(90deg, #F4C4F3 0%, #FC67FA 100%)"}} className="absolute w-[345px] h-[514px] rotate-[156.607deg] shrink-0 rounded-[200px] blur-[350px] top-[20%] -left-[40%]"></div>
        <Image 
        src={bill}
        alt='bill'
        className='w-[50%] max-lg:w-full z-10'
        />
        <div className="basis-[50%]">
        <h2 className="lg:text-[48px] text-[30px] ">
                Easily control your 
                <br />
                billing & invoicing.
            </h2>
            <p className="text-[#FFFFFFB2] text-lg my-8 leading-10">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>
            <div className="flex gap-10 items-center">
                <Image
                src={apple}
                alt='apple'
                />
                <Image 
                src={google}
                alt='google'
                />
            </div>
        </div>
    </div>
  )
}

export default Billing