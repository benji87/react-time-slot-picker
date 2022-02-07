import styled from "styled-components";
import { StyledButtonT } from "./types";

export const StyledButton = styled.button<StyledButtonT>`
  align-self: ${(props) =>
    props.theme.alignSelf ? props.theme.alignSelf : "flex-start"};
  background-color: ${(props) =>
    props.theme.backgroundColor ? props.theme.backgroundColor : "#36a7a2"};
  border: 1px solid
    ${(props) =>
      props.theme.borderColor ? props.theme.borderColor : "transparent"};
  border-radius: ${(props) =>
    props.theme.borderRadius ? props.theme.borderRadius : 4}px;
  color: ${(props) => (props.theme.color ? props.theme.color : "#FFFFFF")};
  display: block;
  line-height: 0;
  padding: ${(props) =>
    props.theme.buttonPadding ? props.theme.buttonPadding : 8}px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.1;
  }

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "none"
        : props.theme.backgroundHoverColor
        ? props.theme.backgroundHoverColor
        : "#236C68"};
    color: ${(props) =>
      !props.theme.disabled &&
      (props.theme.hoverColor ? props.theme.hoverColor : "#EFEFEF")};
  }
`;
