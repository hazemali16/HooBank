

const GetStarted = () => {
  return (
    <div className="sm:w-[80%] w-[95%] mx-auto h-[290px] flex justify-center items-center gap-20 main_box my-20 max-sm:flex-col max-sm:h-[400px] max-sm:p-10 get-started translate-y-16 opacity-0 rounded-xl">
        <div className="basis-[60%]">
        <h2 className="lg:text-[48px] text-[30px] ">
        Let’s try our service now!
            </h2>
            <p className="text-[#FFFFFFB2] text-lg mt-5 leading-10 md:w-[80%]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div style={{background: "linear-gradient(158deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)"}} className=" text-black flex justify-center items-center text-lg rounded-[10px] w-[170px] min-h-[64px] duration-300 hover:w-[190px] hover:h-[84px] cursor-pointer">Get Started</div>
    </div>
  )
}

export default GetStarted