import { ReactNode } from "react";
import {
  Typography as TypographyComponent,
  TypographyProps as TxtProps,
} from "@mui/material";

export interface TextProps extends TxtProps {
  children: ReactNode;
}

export const Text = ({ children, ...props }: TextProps) => {
  return <TypographyComponent {...props}>{children}</TypographyComponent>;
};
