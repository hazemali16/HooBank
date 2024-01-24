import Image from 'next/image'
import { logo } from '../assets'

const NavBar = () => {
  return (
    <div className='z-10 flex justify-between items-center p-5 absolute sm:w-[80%] w-full top-0 sm:left-[10%] max-sm:flex-col  gap-3'>
        <Image src={logo} 
      width={130}
      height={130}
      alt='logo'
      />
      <ul className='list-none flex items-center gap-5'>
        <li className='duration-300 text-white'><a href='#'>Home</a></li>
        <li className='duration-300 text-[#FFFFFFB2] hover:text-white'><a href='#about'>About Us</a></li>
        <li className='duration-300 text-[#FFFFFFB2] hover:text-white'><a href='#features'>Features</a></li>
        <li className='duration-300 text-[#FFFFFFB2] hover:text-white'><a href='#solution'>Solution</a></li>
      </ul>
    </div>
  )
}

export default NavBar