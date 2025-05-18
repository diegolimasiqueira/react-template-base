import { Button, ButtonProps } from '@mui/material';

export const CustomButton = (props: ButtonProps) => (
  <Button variant="contained" color="primary" {...props} />
);