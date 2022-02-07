import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Theme } from "../context/theme";
import { StyledButton } from "./styles";
import { ButtonT } from "./types";

export const Button = (props: ButtonT): JSX.Element => {
  const { children, disabled, handleClick } = props;
  const theme = useContext(Theme);
  return (
    <StyledButton
      disabled={disabled}
      onClick={(e) => (handleClick ? handleClick(e) : undefined)}
      theme={theme}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
};
