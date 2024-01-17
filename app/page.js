import Billing from "./components/Billing";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Says from "./components/Says";
import People from "./components/People";
import Catagories from "./components/Catagories";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className='bg-[#00040F]'>
    <div className='overflow-hidden'>
      <NavBar />
      <Hero />
      <Services />
      <Business />
      <Billing />
      <CardDeal />
      <Says />
      <People />
      <Catagories />
      <GetStarted />
      <Footer />
    </div>
  </div>
  )
}
