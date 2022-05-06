import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RegisterStep = styled.p`
  width: 100%;
  text-align: right;
  font-size: 10px;
  font-weight: 700;
  padding-right: 50px;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 40%;
  height: 100%;
  opacity: 0.8;
  & > h2 {
    margin-bottom: 35px;
  }
  & > label {
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 35px;
  }
  & > select {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid rgb(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 75%;
  }
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const SelectValid = styled.div`
  color: red;
  font-size: 12px;
`;

export const NextAction = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 35px;
  font-size: 10px;
  cursor: ${(props) => (props.hasError ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.hasError ? "auto" : "rgb(41, 110, 250)"};
  color: ${(props) => (props.hasError ? "auto" : "white")};
`;

export const Link = styled(NavLink)`
  color: rgb(41, 110, 250);
  font-weight: 700;
`;

export const RegisterBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: rgb(41, 110, 250);
  color: white;
  & > h2 {
    margin-bottom: 50px;
  }
  & > p {
    max-width: 60%;
    font-size: 14px;
    opacity: 0.7;
    padding: 0 10px;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    & > p {
      max-width: 75%;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
