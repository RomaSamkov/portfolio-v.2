import { data } from "../../data/data";
import {
  Container,
  LeftContent,
  RightContent,
  Section,
  WorkItem,
  WorkList,
} from "./Works.styled";

function Works() {
  return (
    <Section>
      <Container>
        <LeftContent>
          <WorkList>
            {data.map((item) => (
              <WorkItem key={item} text={item}>
                {item}
              </WorkItem>
            ))}
          </WorkList>
        </LeftContent>
        <RightContent></RightContent>
      </Container>
    </Section>
  );
}

export default Works;
