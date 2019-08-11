import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import { Montserrat } from './fonts';

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
    fontFamily: Montserrat,
  },
});

export default theme;
