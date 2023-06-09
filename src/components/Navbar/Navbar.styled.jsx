import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Conatiner = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const Logo = styled.div``;

export const List = styled.ul`
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Icon = styled.div`
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  padding: 5px;
  background-color: #e03ee6;
  &:hover {
    color: #fff;
    background-color: rebeccapurple;
  }
`;
