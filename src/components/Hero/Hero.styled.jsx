import styled, { keyframes } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 1200px;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 74px;
`;
export const SubTitle = styled.h2`
  font-size: 24px;
  color: #e77517;
`;
const animate = keyframes`
to{
  transform:translateY(20px);
}
`;

export const RightContent = styled.div`
  position: relative;
  flex: 3;
  animation: ${animate} 2s infinite ease alternate;
`;

export const Img = styled.img`
  width: 200px;
  height: 100px;
`;

// export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 180px;
//   cursor: pointer;
//   border: none;
//   border-radius: 12px;
//   padding: 5px;
//   background-color: #e03ee6;
//   &:hover {
//     color: #fff;
//     background-color: rebeccapurple;
//   }
// `;
export const Button = styled.button`
  width: 180px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #1b1511;
  text-transform: uppercase;
  padding: 5px;
  background: #922de4;
  border: 2px solid #b18597;
  border-radius: 0.75em;
  transition: transform 0.15s;
  transform-style: preserve-3d;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(223, 218, 245, 0.089);
    border-radius: inherit;
    // box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  &:hover {
    background: #ffe9e9;
    transform: translate(0, 0.25em);
  }
  &:hover::before {
    // box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }
  &:active {
    background: #ffe9e9;
    transform: translate(0em, 0.75em);
  }
  &:active::before {
    // box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;

export const Picture = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
