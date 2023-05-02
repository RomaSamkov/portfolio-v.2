import styled from "styled-components";

export const Conatiner = styled.div`
  height: 100vh;
  /* background-color: #41485c; */
  background: rgb(60, 60, 18);
  background: linear-gradient(
    90deg,
    rgba(60, 60, 18, 1) 0%,
    rgba(21, 8, 46, 0.9023984593837535) 45%,
    rgba(1, 2, 61, 1) 100%
  );
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
