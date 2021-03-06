import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  --yellow: #FFE81F;
  --black: #000000;
  --white: #ffffff;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", serif;
    font-size: 18px;
    color: var(--yellow);
  }

  body {
    background-color: var(--black);
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  .results-appear {
    opacity: 0.01;
    transform: translate(25px);
  }

  .results-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 600ms;
  }

  .results-enter {
    opacity: 0.01;
    transform: translate(25px);
  }

  .results-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 600ms;
  }

  .results-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .results-exit-active {
    opacity: 0.01;
    transform: translate(25px);
    transition: all 600ms;
  }

  .info-enter {
    opacity: 0.01;
    transform: translate(-25px);
  }

  .info-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 600ms;
  }

  .info-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .info-exit-active {
    opacity: 0.01;
    transform: translate(-25px);
    transition: all 600ms;
  }

  .modal-appear {
    opacity: 0.01;
    transform: translateY(-20px);
  }

  .modal-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms;
  }

  .modal-enter {
    opacity: 0.01;
    transform: translateY(-50px);
  }

  .modal-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 400ms;
  }

  .modal-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .modal-exit-active {
    opacity: 0.01;
    transform: translateY(50px);
    transition: all 400ms;
  }

  .loader-appear {
    opacity: 0.01;
    transform: translateY(-40px);
  }

  .loader-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 400ms;
  }

  .loader-enter {
    opacity: 0.01;
    transform: translateY(-40px);
  }

  .loader-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 400ms;
  }

  .loader-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .loader-exit-active {
    opacity: 0.01;
    transform: translateY(40px);
    transition: all 400ms;
  }

  .heading-appear {
    opacity: 0;
    transform: translateY(-150px);
  }

  .heading-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 1000ms;
  }

  .form-appear {
    opacity: 0;
    transform: translateY(100px);
  }

  .form-appear-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 1000ms;
  }
`;
