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
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
