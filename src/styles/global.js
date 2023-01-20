import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white:#f5f5f5;
        --soft-gray: #E6E6E6;
        --gray:#A9A9A9;
        --dark-gray:#5E6B70;
        --dark-green:#222D35;
        --green: #3B9C84;
    }

    body{
        background: var(--soft-gray);
        color: var(--dark-gray);
        overflow-x: hidden;
        
    }

    body, input , button {
        font-family: sans-serif;
        font-size: 1rem;
    }
    h1 , h2 ,h3 ,h4{
        font-weight: bolder;
    }
    h2 ,h3 ,h4{
        font-size: 1rem;
    }
    
    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;
