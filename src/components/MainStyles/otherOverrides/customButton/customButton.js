import React from 'react';

export const customButton = theme => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.secondary.button,
          },
          backgroundColor: theme.palette.primary.button,
          color: theme.palette.primary.text,
          borderRadius: '12px',
        },
        variants: [
          {
            props: { variant: 'learnMore' },
            style: {
              textTransform: 'none',
              minWidth: '274px',
              minHeight: '44px',
              color: theme.palette.primary.text,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {},
          },
        ],
      },
    },
  };
};
