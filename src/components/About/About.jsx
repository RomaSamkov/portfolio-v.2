/* eslint-disable react/no-unknown-property */
import {
  Button,
  Container,
  LeftContent,
  RightContent,
  Section,
  SubTitle,
  Title,
} from "./About.styled";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Cube/Cube";

function About() {
  return (
    <Section>
      <Container>
        <LeftContent>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
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
