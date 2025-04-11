import Container from "../../components/Container";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import AboutCompany from "./AboutCompany";
import InfoSectionDivider from "./InfoSectionDivider";
import Features from "./Features";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      
      <AboutCompany />

      <InfoSectionDivider />
      
      <Services />

      {/* <Features /> */}
      
      <div className="min-h-screen bg-gray-100">
        Content
      </div>
      
      <Footer />
    </>
  )
}

export default Home;