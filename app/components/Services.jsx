

const Services = () => {
  return (
    <div className="sm:w-[90%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 py-5 uppercase text-lg">
      <div className="flex items-center justify-center max-lg:flex-col gap-5 lg:border-r"><span className="text-[40px] font-[500]">3800+</span> <span className="main_color">User Active</span></div>
      <div className="flex items-center justify-center max-lg:flex-col gap-5 lg:border-r"><span className="text-[40px] font-[500]">230+</span> <span className="main_color">TRUSTED BY COMPANY</span></div>
      <div className="flex items-center justify-center max-lg:flex-col gap-5" ><span className="text-[40px] font-[500]">$230M+</span> <span className="main_color">TRANSACTION</span></div>
    </div>
  )
}

export default Services