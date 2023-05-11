import { ReactNode } from "react";

import {
  Button as ButtonComponent,
  ButtonProps as btnProps,
  CircularProgress,
} from "@mui/material";

export interface ButtonProps extends btnProps {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({ children, isLoading, ...props }: ButtonProps) => {
  return (
    <ButtonComponent style={{ display: "flex", gap: "0.5rem" }} {...props}>
      {isLoading && <CircularProgress color="inherit" size={20} />}
      {children}
    </ButtonComponent>
  );
};
