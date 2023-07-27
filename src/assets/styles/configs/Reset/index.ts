import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    scrollbar-width: thin;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 95%;
    }
  }

  html {
    overflow-x: hidden;
  }

  body {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
  }

  button {
    cursor: pointer;
  }

  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
    color: inherit;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
  }

  hr {
    border: none;
    background: none;
  }

  textarea {
    resize: none;
    border: 0;
    resize: none;
    outline: none;
  }
`

export { Reset }
