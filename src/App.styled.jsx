import styled from "styled-components";

export const Conatiner = styled.div`
  height: 100vh;
  background-color: #41485c;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
