import styled, { keyframes } from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: #555;
`;

export const Container = styled.div`
  width: 1200px;
  /* height: 100vh;
  scroll-snap-align: center; */
  display: flex;
  justify-content: space-between;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const RightContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const animateText = keyframes`
to{
   width: 100%;
}`;

export const WorkItem = styled.li`
  position: relative;
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #540addd1;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: ${animateText} 0.5s linear both;
    }
  }
`;
