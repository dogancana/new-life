import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: sans-serif,Helvetica,Aria;
        color: #00112c;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`;
