import Button from '@mui/material/Button';

export const CustomBtn = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
