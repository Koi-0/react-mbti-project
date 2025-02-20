import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    font-weight: bold;
    color: #ff5a5f;
    text-decoration: inherit;
}

button {
    background-color: #ff5a5f;
    transition: background-color 0.3s;
    &:hover {
        background-color: transparent;
    }
}
`;

export default GlobalStyle;
