import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    // Hide scrollbar in multiple browsers
    scrollbar-width: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

  }
}
`;

export default GlobalStyle;
