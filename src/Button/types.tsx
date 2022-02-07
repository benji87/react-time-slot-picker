import React from "react";

export type ButtonT = {
  children: React.ReactNode;
  disabled?: boolean;
  handleClick?: (e: object) => void;
};

export type StyledButtonT = {
  alignSelf?: "center" | "flex-end" | "flex-start";
  backgroundColor?: string;
  backgroundHoverColor?: string;
  borderColor?: string;
  borderRadius?: string;
  buttonPadding?: number;
  hoverColor?: string;
};
