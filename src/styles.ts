import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaRodape: '#FFEBD9',
  rosaFundo: '#fff8f2',
  branco: '#fff'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  letter-spacing: 0;

  body{
    background-color: ${cores.rosaFundo};
  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop} ){
      width: 100%;
      max-width: 820px;
    }
  }
}
`
