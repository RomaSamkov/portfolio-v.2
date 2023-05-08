import { useState } from "react";
import { data } from "../../data/data";
import {
  Container,
  LeftContent,
  RightContent,
  Section,
  WorkItem,
  WorkList,
} from "./Works.styled";
import WebDesign from "../WebDesign/WebDesign";
import Development from "../Development/Development";
import ProductDesign from "../ProductDesign/ProductDesign";

function Works() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <LeftContent>
          <WorkList>
            {data.map((item) => (
              <WorkItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </WorkItem>
            ))}
          </WorkList>
        </LeftContent>
        <RightContent>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </RightContent>
      </Container>
    </Section>
  );
}

export default Works;
