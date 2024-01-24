import Image from 'next/image'
import { airbnb, binance, coinbase, dropbox } from '../assets'

const Catagories = () => {
  return (
    <div className="sm:w-[80%] w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 py-5 catagories translate-y-16 opacity-0">
      <div className="flex justify-center items-center">
        <Image 
        src={airbnb}
        alt='airbnb'
        width={192.255}
        height={60}
        />
      </div>
      <div className="flex justify-center items-center">
      <Image 
        src={binance}
        alt='binance'
        width={192.255}
        height={60}
        />
      </div>
      <div className="flex justify-center items-center">
      <Image 
        src={coinbase}
        alt='coinbase'
        width={192.255}
        height={60}
        />
      </div>
      <div className="flex justify-center items-center">
      <Image 
        src={dropbox}
        alt='dropbox'
        width={192.255}
        height={60}
        />
      </div>
    </div>
  )
}

export default Catagories