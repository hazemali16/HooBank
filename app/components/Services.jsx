'use client'
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.onscroll = function () {
        let info = document.querySelector(".info")
        if ( window.scrollY >= 100 ) {
            info.classList.add("animate-opacity-top")
        }
        let business = document.querySelector(".business")
        if ( window.scrollY >= business.offsetTop -600 ) {
          business.classList.add("animate-opacity-top")
        }
        let billing = document.querySelector(".billing")
        if ( window.scrollY >= billing.offsetTop -600 ) {
          billing.classList.add("animate-opacity-top")
        }
        let cardDeal = document.querySelector(".card-deal")
        if ( window.scrollY >= cardDeal.offsetTop -600 ) {
          cardDeal.classList.add("animate-opacity-top")
        }
        let says = document.querySelector(".says")
        if ( window.scrollY >= says.offsetTop -600 ) {
          says.classList.add("animate-opacity-top")
        }
        let catagories = document.querySelector(".catagories")
        if ( window.scrollY >= catagories.offsetTop -600 ) {
          catagories.classList.add("animate-opacity-top")
        }
        let getStarted = document.querySelector(".get-started")
        if ( window.scrollY >= getStarted.offsetTop -600 ) {
          getStarted.classList.add("animate-opacity-top")
        }
        let people = document.querySelector(".people")
        let peopleBoxes = document.querySelectorAll(".people-box")
        if ( window.scrollY >= people.offsetTop -600 ) {
          people.classList.add("animate-opacity-top")
          peopleBoxes.forEach((ele) => {
                ele.classList.remove("opacity-0")
            })
        }
      }
      
    });
  return (
    <div className="sm:w-[90%] w-full mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 py-5 uppercase text-lg info translate-y-16 opacity-0">
      <div className="flex items-center justify-center max-lg:flex-col gap-5 lg:border-r"><span className="text-[40px] font-[500]">3800+</span> <span className="main_color">User Active</span></div>
      <div className="flex items-center justify-center max-lg:flex-col gap-5 lg:border-r"><span className="text-[40px] font-[500]">230+</span> <span className="main_color">TRUSTED BY COMPANY</span></div>
      <div className="flex items-center justify-center max-lg:flex-col gap-5" ><span className="text-[40px] font-[500]">$230M+</span> <span className="main_color">TRANSACTION</span></div>
    </div>
  )
}

export default Services