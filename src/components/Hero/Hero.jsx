import Navbar from "../Navbar/Navbar";
import {
  Button,
  Container,
  LeftContent,
  Picture,
  RightContent,
  Section,
  SubTitle,
  Title,
} from "./Hero.styled";

function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftContent>
          <Title>
            React.TS.JS.
            <br />
            Node.js
          </Title>
          <img src="" alt="" />
          <SubTitle>I am junior web developer</SubTitle>
          <Button>Learn More</Button>
        </LeftContent>
        <RightContent>
          <Picture src="/img/laptop.png" alt="" />
        </RightContent>
      </Container>
    </Section>
  );
}

export default Hero;
