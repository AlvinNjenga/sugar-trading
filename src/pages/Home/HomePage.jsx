import Hero from "./Hero";
import Header from "../../components/Header";
import AboutCompany from "./AboutCompany";
import Container from "../../components/Container";

const Home = () => {
  return (
    <>
      <Hero />
      <Container>
        <AboutCompany />
      </Container>
      <div className="min-h-screen bg-gray-100">
        Bottom
      </div>
    </>
  )
}

export default Home;