
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Backgrounds from "@/sections/Backgrounds";
import CyberpunkTimeline from "@/sections/CyberpunkTimeline";
import Navbar from "@/sections/Navbar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Kontakt from "@/sections/Kontakt";
import Intro from "@/sections/Intro";
import Footer from "@/sections/Footer";
import { IntroProvider } from "@/components/handler/IntroContent";



export default function Home() {
  return (
    
    <IntroProvider>
      <Intro/>
      <Backgrounds/>
      <Navbar/>
      <Header/>
      <Hero/>

      <CyberpunkTimeline/>
     
      <Kontakt/>
      <Footer/>
      </IntroProvider>
    
  );
}
