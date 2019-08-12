import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import { AnonymousPro } from './fonts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: palette.blue,
      dark: palette.blue,
    },
    background: {
      default: palette.white,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: AnonymousPro,
  },
});

export default theme;
