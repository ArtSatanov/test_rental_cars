import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { useMemo } from 'react';
import palette from './palette/palette';
import breakpoints from './breakpoints/breakpoints';
import { otherOverrides } from './otherOverrides';
import { CssBaseline } from '@mui/material';

export const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = otherOverrides(theme);

  return (
    <>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </>
  );
};
