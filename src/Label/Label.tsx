import React from "react";
import PropTypes from "prop-types";
import { LabelT } from "./types";
import { StyledLabel } from "./styles";

export const Label = (props: LabelT) => {
  const { children, htmlFor } = props;
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string
};
