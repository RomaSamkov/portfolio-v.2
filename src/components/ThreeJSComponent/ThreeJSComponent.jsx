/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Container } from "./ThreeJSComponent.styled";
import Cube from "../Cube/Cube";

function ThreeJSComponent() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
}

export default ThreeJSComponent;
