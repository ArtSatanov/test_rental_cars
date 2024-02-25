// regular
import ManropeRegularTff from '../../fonts/manropeR/manrope-regular.ttf';
import ManropeRegularWoff from '../../fonts/manropeR/manrope-regular.woff';
import ManropeRegularWoff2 from '../../fonts/manropeR/manrope-regular.woff2';
// medium
import ManropeMediumTff from '../../fonts/manropeM/manrope-medium.ttf';
import ManropeMediumWoff from '../../fonts/manropeM/manrope-medium.woff';
import ManropeMediumWoff2 from '../../fonts/manropeM/manrope-medium.woff2';
// semiBold
import ManropeSemiBoldTff from '../../fonts/manropeSB/manrope-semiBold.ttf';
import ManropeSemiBoldWoff from '../../fonts/manropeSB/manrope-semiBold.woff';
import ManropeSemiBoldWoff2 from '../../fonts/manropeSB/manrope-semiBold.woff2';

export const CssBaseline = theme => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '': `
          @font-face {
                font-family: 'Manrope';
                src: local('Manrope Regular'), local('Manrope-Regular'),
                    url('${ManropeRegularWoff2}') format('woff2'),
                    url('${ManropeRegularWoff}') format('woff'),
                    url('${ManropeRegularTff}') format('truetype');
                font-weight: 400;
                font-style: normal;
                font-display: swap;
            }
            @font-face {
                font-family: 'Manrope';
                src: local('Manrope Medium'), local('Manrope-Medium'),
                    url('${ManropeMediumWoff2}') format('woff2'),
                    url('${ManropeMediumWoff}') format('woff'),
                    url('${ManropeMediumTff}') format('truetype');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }
            @font-face {
                font-family: 'Manrope';
                src: local('Manrope SemiBold'), local('Manrope-SemiBold'),
                    url('${ManropeSemiBoldWoff2}') format('woff2'),
                    url('${ManropeSemiBoldWoff}') format('woff'),
                    url('${ManropeSemiBoldTff}') format('truetype');
                font-weight: 600;
                font-style: normal;
                font-display: swap;
            }
        `,
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          //  backgroundColor: theme?.palette.background.default,
          backgroundAttachment: 'fixed',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        h1: {
          padding: '0',
          margin: '0',
        },
        h2: {
          padding: '0',
          margin: '0',
        },
        h3: {
          padding: '0',
          margin: '0',
        },
        h4: {
          padding: '0',
          margin: '0',
        },
        h5: {
          padding: '0',
          margin: '0',
        },
        h6: {
          padding: '0',
          margin: '0',
        },
        p: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
        },
        ul: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
        },
        a: {
          textDecoration: 'none',
          padding: '0',
          margin: '0',
        },
      },
    },
  };
};
