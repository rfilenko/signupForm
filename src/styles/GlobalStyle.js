import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,700|Merriweather:400,700&display=swap");
    body {
        color: ${props => (props.whiteColor ? "white" : "black")};
        font-family: "Merriweather", serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    main {
        display: flex;
        flex-wrap: wrap;
    }
    h2 {
        font-family: "Fira Sans", sans-serif;
    } 
    @media screen and (max-width: 880px) {
        main {
            margin-top: 5rem;
            justify-content: center;
        }
    }
`;
