export const customButton = theme => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.secondary.button,
          },
          backgroundColor: theme.palette.primary.button,
          color: theme.palette.primary.main,
          fontFamily: 'Manrope, sans-serif',
          borderRadius: '12px',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0',
        },
      },
      variants: [
        {
          props: { variant: 'learnMore' },
          style: {
            textTransform: 'none',
            padding: '12px 99px',
          },
        },
        {
          props: { variant: 'search' },
          style: {
            textTransform: 'none',
            padding: '14px 44px',
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
