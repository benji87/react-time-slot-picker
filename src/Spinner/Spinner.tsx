import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Theme } from "../context/theme";
import { StyledSpinner, StyledSpinnerLabel } from "./styles";
import { SpinnerT } from "./types";

export const Spinner = (props: SpinnerT) => {
  const { color, label } = props;
  const theme = useContext(Theme);
  return (
    <StyledSpinner>
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <defs>
          <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
            <stop
              stopColor={theme && theme.color ? theme.color : "#525252"}
              stopOpacity="0"
              offset="0%"
            />
            <stop
              stopColor={theme && theme.color ? theme.color : "#525252"}
              stopOpacity=".631"
              offset="63.146%"
            />
            <stop
              stopColor={theme && theme.color ? theme.color : "#525252"}
              offset="100%"
            />
          </linearGradient>
        </defs>
        <g transform="translate(1 1)" fill="none" fillRule="evenodd">
          <path
            d="M36 18c0-9.94-8.06-18-18-18"
            stroke="url(#a)"
            strokeWidth="2"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </path>
          <circle fill={color} cx="36" cy="18" r="1">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
      <StyledSpinnerLabel {...props}>{label}</StyledSpinnerLabel>
    </StyledSpinner>
  );
};

Spinner.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string
};
