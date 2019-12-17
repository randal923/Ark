import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    html {
        /* 1 rem = 10px. Browser default font-size is 16px / 10px = 62.5%
        Percentage allows user to change default font-size in browser */
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #1e1e2f;
        color: white;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

`;
