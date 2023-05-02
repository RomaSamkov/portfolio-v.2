import Navbar from "../Navbar/Navbar";
import { Container, LeftContent, RightContent, Section } from "./Hero.styled";

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftContent>
          <h1>React.TS.JS.Node.js</h1>
          <img src="" alt="" />
          <p>I am junior web developer</p>
        </LeftContent>
        <RightContent></RightContent>
      </Container>
    </Section>
  );
}

export default Hero;
