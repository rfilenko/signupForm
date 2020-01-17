import styled from "styled-components";

export const ModalWrap = styled.div`
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 0;
  max-height: 70%;
  margin: auto;
  overflow-y: auto;
  border-radius: 2px;
  will-change: top, opacity;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  min-height: 420px;
  padding: 1.5rem;
  border-radius: 0.2rem;
  width: 25rem;
  background: #171c31;
  font-family: "Merriweather", serif;

  &.visible {
    z-index: 1003;
    display: block;
    opacity: 1;
    top: 15%;
    transform: scaleX(1) scaleY(1);
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:before {
    content: "";
    background-image: linear-gradient(
      139deg,
      ${props => props.theme.primary},
      ${props => props.theme.inputColor}
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
  .modal-content {
    padding: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    font-family: "Fira Sans", sans-serif;
    color: ${props => props.theme.primary};
  }
  .input-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 3rem;
    font-family: "Fira Sans", sans-serif;
    text-align: center;
  }
  input,
  textarea {
    background: #212843;
    border: none;
    padding: 1em 0.5em;
    width: 85%;
    color: ${props => props.theme.lightBlue};
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  button {
    display: inline-block;
    background: linear-gradient(
      25deg,
      ${props => props.theme.primary},
      #9e6bae
    );
    color: ${props => props.theme.colorText};
    border: none;
    padding: 1rem;
    width: 50%;
    margin: 0.5rem;
    border-radius: 5rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.25s ease-in;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  a {
    text-decoration: none;
    text-align: center;
  }
  button:hover {
    transition: all 0.25s ease-in;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: linear-gradient(
      -135deg,
      ${props => props.theme.primary},
      ${props => props.theme.secondary}
    );
  }
  button.modal-close {
    background: linear-gradient(
      75deg,
      ${props => props.theme.lightBlue},
      ${props => props.theme.green}
    );
  }
  button.modal-close:hover {
    transition: all 0.25s ease-in;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background: linear-gradient(
      -225deg,
      ${props => props.theme.green} ${props => props.theme.lightBlue}
    );
  }
  .buttons-wrap {
    display: flex;
    width: 100%;
  }
`;

// A new ModalError component based on ModalWrap
export const ModalError = styled(ModalWrap)`
  &.error {
    max-width: 25rem;
    min-height: unset;
    top: 32%;
    &:before {
      content: "";
      background-image: linear-gradient(
        139deg,
        ${props => props.theme.red},
        ${props => props.theme.orange}
      );
    }

    .modal-content {
      padding: 8px;
    }
    .buttons-wrap {
      justify-content: flex-end;
    }
    button.modal-close {
      display: inline-block;
      background: linear-gradient(
        25deg,
        ${props => props.theme.orange},
        ${props => props.theme.red}
      );
    }
    button.modal-close:hover {
      transition: all 0.25s ease-in;
      box-shadow: ${props => props.theme.boxShadow};
      background: linear-gradient(
        -205deg,
        ${props => props.theme.red},
        ${props => props.theme.orange}
      );
    }
  }
`;
