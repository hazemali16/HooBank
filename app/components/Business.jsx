'use client'
import Image from 'next/image'
import { send, shield, star } from '../assets'


const Business = () => {
  return (
    <div id='about' className="sm:w-[80%] w-full mx-auto max-sm:px-5 flex items-center gap-40 my-60 max-lg:flex-col business translate-y-16 opacity-0">
        <div className="basis-[50%]">
            <h2 className="lg:text-[48px] text-[30px] ">
                You do the business,
                <br />
                we’ll handle the money.
            </h2>
            <p className="text-[#FFFFFFB2] text-lg my-8 leading-10">
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <div style={{background: "linear-gradient(158deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)"}} className="text-black flex justify-center items-center text-lg rounded-[10px] w-[170px] h-[64px] duration-300 hover:w-[190px] hover:h-[84px] cursor-pointer">Get Started</div>
        </div>
        <div className="basis-[50%]">
            <ul className='flex flex-col gap-5'>
                <li className='p-5 flex gap-5 items-center duration-300 cursor-pointer rounded-[20px]' onMouseEnter={(e) => {
                    e.stopPropagation()
                    e.target.classList.add("main_box")
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("main_box")
                }}>
                    <span className='basis-16 w-16 h-16 flex justify-center items-center bg-[#09977C1A] rounded-full'>
                    <Image
                    src={star}
                    alt='star'
                    />
                    </span>
                    <div className="basis-[80%]">
                        <h3 className='text-lg mb-2'>Rewards</h3>
                        <p className='text-[#FFFFFFB2]'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </li>
                <li className='p-5 flex gap-5 items-center duration-300 cursor-pointer rounded-[20px]' onMouseEnter={(e) => {
                    e.stopPropagation()
                    e.target.classList.add("main_box")
                    
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("main_box")
                }}>
                    <span className='basis-16 w-16 h-16 flex justify-center items-center bg-[#09977C1A] rounded-full'>
                    <Image
                    src={shield}
                    alt='shield'
                    />
                    </span>
                    <div className="basis-[80%]">
                        <h3 className='text-lg mb-2'>100% Secured</h3>
                        <p className='text-[#FFFFFFB2]'>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </li>
                <li className='p-5 flex gap-5 items-center duration-300 cursor-pointer rounded-[20px]' onMouseEnter={(e) => {
                    e.stopPropagation()
                    e.target.classList.add("main_box")
                }} onMouseLeave={(e) => {
                    e.target.classList.remove("main_box")
                }}>
                    <span className='basis-16 w-16 h-16 flex justify-center items-center bg-[#09977C1A] rounded-full'>
                    <Image
                    src={send}
                    alt='send'
                    />
                    </span>
                    <div className="basis-[80%]">
                        <h3 className='text-lg mb-2'>Balance Transfer</h3>
                        <p className='text-[#FFFFFFB2]'>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Business