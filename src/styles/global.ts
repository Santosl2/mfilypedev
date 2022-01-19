import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --layout-size: 1200px;
    --primary: #C4F1BE;
    --secondary: #A2C3A4;
    --gray-200: #0000009c;
    --gray-500: rgb(46, 46, 46);
    --gray-400: rgb(94, 94, 94);
    --blue-500: #EDF7FA
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    color: inherit;
    text-decoration: underline;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .separator {
    margin: 2rem;
  }

  li {
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  #responsive {
      display: inherit;
      min-width: auto;
      position: absolute;
      top: 0;
      z-index: 5;
  }

  h1, h2, h3, h4, h5, h6, p{
    color: var(--gray-500);
  }

  h6 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1.7rem;    
    margin: 2rem 0 2rem 0;
  }
  
 
  h4 {
    font-size: 2.5em ;
    line-height: 1.2em;
    margin-bottom: 3rem;
  }

 p {
 
    margin-bottom: 1.5rem;
  }

`;
