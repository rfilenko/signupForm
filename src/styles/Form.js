import styled from "styled-components";
import tick from "../images/tick.svg";

export const Form = styled.form`
  min-height: 420px;
  padding: 1.5rem;
  border-radius: 0.2rem;
  width: 25rem;
  background: ${props => props.theme.formBg};
  position: relative;

  &:before {
    content: "";
    background-image: linear-gradient(
      139deg,
      ${props => props.theme.primary},
      ${props => props.theme.secondary}
    );
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 999;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 3rem;
    text-align: center;
  }
  input {
    background: #212843;
    border: none;
    padding: 1em 0.5em;
    width: 85%;
    color: ${props => props.theme.inputColor};
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  .remember-block {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 560px) {
      flex-direction: column;
      align-items: center;
    }

    label {
      display: flex;
      position: relative;
      padding-left: 0.8rem;
      cursor: pointer;
    }
    span {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      position: absolute;
      left: -0.2em;
      border-radius: 0.3em;
      border: 1px solid ${props => props.theme.secondary};
    }
    input:checked + span:before {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: 1rem;
      /* background: ${props => props.theme.secondary}; */
      background-image: url(${tick});
    }
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
    a {
      color: #9d8ad7;
      text-decoration: none;
    }
  }
  .signup-block {
    text-align: center;
    span {
      color: #8d8d8d;
      opacity: 0.75;
    }
    a {
      color: #8d8d8d;
      font-weight: 700;
      text-decoration: none;
    }
  }
  button {
    background: linear-gradient(25deg, #7158bd, #9e6bae);
    color: ${props => props.theme.linkColor};
    border: none;
    padding: 1rem;
    width: 65%;
    border-radius: 5rem;
    color: ${props => props.theme.colorText};
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    margin: 1.5rem auto;
    cursor: pointer;
    transition: all 0.25s ease-in;
    box-shadow: ${props => props.theme.boxShadow};
    &:hover {
      box-shadow: ${props => props.theme.boxShadowMd};
      background: linear-gradient(
        -135deg,
        ${props => props.theme.primary},
        ${props => props.theme.secondary}
      );
    }
  }
`;

// A new FormSign component based on Form
export const FormSign = styled(Form)`
  &:before {
    background-image: linear-gradient(
      139deg,
      ${props => props.theme.lightBlue},
      ${props => props.theme.green}
    );
  }
  input {
    background: #212843;
    border: none;
    padding: 1em 0.5em;
    width: 85%;
    color: ${props => props.theme.lightBlue};
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  button {
    background: linear-gradient(
      75deg,
      ${props => props.theme.lightBlue},
      ${props => props.theme.green}
    );
    color: ${props => props.theme.colorText};
    &:hover {
      background: linear-gradient(
        -135deg,
        ${props => props.theme.green},
        ${props => props.theme.lightBlue}
      );
    }
  }
`;
