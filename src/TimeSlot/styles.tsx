import styled from "styled-components";
import { StyledInputT, StyledLabelTextT } from "./types";

const StyledTimeSlot = styled.div`
  flex: 1;
`;

const StyledLabelText = styled.div<StyledLabelTextT>`
  border: ${(props) => (props.theme.border ? props.theme.border : "none")};
  border-radius: ${(props) =>
    props.theme.borderRadius ? props.theme.borderRadius : 12}px;
  box-shadow: ${(props) =>
    props.theme.boxShadow
      ? props.theme.boxShadow
      : "0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);"};
  color: ${(props) => (props.theme.color ? props.theme.color : "#343f4d")};
  font-size: ${(props) =>
    props.theme.fontSize ? props.theme.fontSize : "18"}px;
  height: 100%;
  margin: ${(props) =>
    props.theme.verticalMargin ? props.theme.verticalMargin : 5}px;
  padding: ${(props) =>
      props.theme.paddingVertical ? props.theme.paddingVertical : 12}px
    ${(props) =>
      props.theme.paddingHorizontal ? props.theme.paddingHorizontal : 16}px;
  text-align: center;
`;

const StyledInput = styled.input<StyledInputT>`
  box-sizing: border-box;
  opacity: 0;
  position: absolute;
  left: 15%;
  top: 25%;

  &:hover + div {
    border-color: transparent;
    background: ${(props) =>
      props.theme.hoverBackgroundColor
        ? props.theme.hoverBackgroundColor
        : "#fafafa"};
    transition: all 0.25s ease-in-out;
  }

  &:checked + div {
    background-color: ${(props) =>
      props.theme.selectedBackgroundColor
        ? props.theme.selectedBackgroundColor
        : "#36a7a2"};
    border-color: ${(props) =>
      props.theme.selectedBorderColor
        ? props.theme.selectedBorderColor
        : "#BBDD92"};
    color: ${(props) =>
      props.theme.selectedColor ? props.theme.selectedColor : "#FFFFFF"};
  }

  &:checked:focus-within + div {
    border-color: transparent;
  }

  &:disabled + div {
    background-color: ${(props) =>
      props.theme.disabledBackgroundColor
        ? props.theme.disabledBackgroundColor
        : "#f7f7f9"};
    border-color: transparent;
    box-shadow: none;
    color: ${(props) =>
      props.theme.disabledColor ? props.theme.disabledColor : "#adb2b7"};
    cursor: not-allowed;
  }

  &:focus-within + div {
    border-color: 2px solid white;
    outline-style: solid;
    outline-color: ${(props) =>
      props.theme.focusOutlineColor
        ? props.theme.focusOutlineColor
        : "#236C68"};
    transition: all 0.25s ease-in-out;
  }
`;

export { StyledTimeSlot, StyledLabelText, StyledInput };
