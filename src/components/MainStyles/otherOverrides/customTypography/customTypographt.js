export const customTypography = theme => {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.text,
          fontFamily: 'Manrope, sans-serif',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '18px',
        },
      },
      variants: [
        {
          props: { variant: 'title1' },
          style: {
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '24px',
          },
        },
        {
          props: { variant: 'desc1' },
          style: {
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            color: theme.palette.secondary.text,
          },
        },
        {
          props: { variant: 'rent' },
          style: {
            textTransform: 'none',
            padding: '12px 50px',
          },
        },
      ],
    },
  };
};
