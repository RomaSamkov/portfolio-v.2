import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const FormTitle = styled.h1`
  font-weight: 200;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const RightContent = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 400px;
  padding: 20px;
  background-color: #e4e4e4;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e4e4e4;
  border: none;
  border-radius: 5px;
`;

export const ButtonForm = styled.button`
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background: #922de4;
  font-weight: bold;
  cursor: pointer;
`;
