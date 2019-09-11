import { createGlobalStyle } from 'styled-components';
import palette from 'common/palette';

import { AnonymousPro } from './fonts';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${AnonymousPro};
    -webkit-text-size-adjust: none;
    color: ${palette.black};
  }

  button {
    font-family: inherit;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  figure {
    margin: 0;
  }
  
  address {
    font-style: normal;
  }

  .slick-dots {
    bottom: 10px;
  }
`;

export default GlobalStyle;
