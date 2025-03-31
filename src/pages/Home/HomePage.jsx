import Container from "../../components/Container";
import Footer from "../../components/Footer";

import Hero from "./Hero";
import AboutCompany from "./AboutCompany";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <AboutCompany />
      </Container>
      <div className="min-h-screen bg-gray-100">
      Content
      </div>
      <Footer />
    </>
  )
}

export default Home;