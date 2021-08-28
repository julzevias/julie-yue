import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skillset from '../components/Skillset';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
 
 
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}  />
            <Skillset />
            <Projects/>
            <Contact/>
            <Footer />
 
        </>
    );
};
 
export default Home;
