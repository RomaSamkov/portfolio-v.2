import {
  Button,
  Container,
  LeftContent,
  RightContent,
  Section,
  SubTitle,
  Title,
} from "./About.styled";

function About() {
  return (
    <Section>
      <Container>
        <LeftContent>
          {/* <Picture src="/img/laptop.png" alt="" /> */}
        </LeftContent>
        <RightContent>
          <Title>Roma RS</Title>
          <SubTitle>I am junior web developer</SubTitle>
          <Button>See my Projects</Button>
        </RightContent>
      </Container>
    </Section>
  );
}

export default About;
