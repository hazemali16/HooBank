import Image from 'next/image'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <div className="sm:w-[80%] w-full mx-auto max-sm:px-5 flex items-center gap-40 my-60 max-lg:flex-col-reverse card-deal translate-y-16 opacity-0">
    <div className="basis-[50%]">
        <h2 className="lg:text-[48px] text-[30px] ">
            Find a better card deal 
            <br />
            in few easy steps.
        </h2>
        <p className="text-[#FFFFFFB2] text-lg my-8 leading-10">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <div style={{background: "linear-gradient(158deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)"}} className="text-black flex justify-center items-center text-lg rounded-[10px] w-[170px] h-[64px] duration-300 hover:w-[190px] hover:h-[84px] cursor-pointer">Get Started</div>
    </div>
    <div className="basis-[50%]">
        <Image 
        src={card}
        alt='card'
        />
    </div>
</div>
  )
}

export default CardDeal