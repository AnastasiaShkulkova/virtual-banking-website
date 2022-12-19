import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/DiscoverSection/Data'
import { homeObjThree } from '../components/RegInfoSection/Data'
import RegInfoSection from '../components/RegInfoSection/RegInfoSection'
import InfoSection from '../components/InfoSection/InfoSection';
import DiscoverSection from '../components/DiscoverSection/DiscoverSection';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar' 
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

function Home() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <DiscoverSection {...homeObjTwo} />
      <Services />
      <RegInfoSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home