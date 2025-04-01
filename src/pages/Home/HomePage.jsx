import Container from "../../components/Container";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import AboutCompany from "./AboutCompany";
import InfoSectionDivider from "./InfoSectionDivider";

const Home = () => {
  return (
    <>
      <Hero />

      <Container>
        <AboutCompany />
      </Container>
      <InfoSectionDivider />
      
      <div className="min-h-screen bg-gray-100">
        Content
      </div>
      <Footer />
    </>
  )
}

export default Home;