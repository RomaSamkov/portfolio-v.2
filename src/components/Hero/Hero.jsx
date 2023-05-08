/* eslint-disable react/no-unknown-property */
import Navbar from "../Navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
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
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.6}>
              <MeshDistortMaterial
                color="#31204d"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Picture src="/img/laptop.png" alt="" />
        </RightContent>
      </Container>
    </Section>
  );
}

export default Hero;
