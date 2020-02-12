import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    html {
        --light-text-color: #fffcf3;
        --medium-text-color: #8c909a;
        --dark-text-color: #727377;

        --blue: #00a5ff;
        --dark-blue: #3c78a6;
        --border-blue: #353a53;

        --light-grey: #40444b;
        --medium-grey: #36393f;
        --dark-grey: #2f3136;
        --darker-grey: #202225;

        --success: #58d777;
        --success-hover: #29323a;

        --danger: #f45722;
        --danger-hover: #fff;

        --warning: #f0af03;
        --warning-hover: #29323a;

        --wrap-1 {
            flex-basis: calc(100% - 50px);
            max-width: calc(100% - 50px);
        }

        --wrap-2 { 
        flex-basis: calc(50% - 50px);
        max-width: calc(50% - 50px);
        }

        --wrap-3 { 
            flex-basis: calc(32% - 50px);
            max-width: calc(32% - 50px);
        }

        --wrap-4 { 
            flex-basis: calc(25% - 50px);
            max-width: calc(25% - 50px);
        }
        
        --wrap-5 { 
            flex-basis: calc(20% - 50px);
            max-width: calc(20% - 50px);
        }
    }
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
        background: #202225;
        font-size: 1.2rem;
        color: #fffcf3;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }



`;
