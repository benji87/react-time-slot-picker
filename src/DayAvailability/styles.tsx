import styled from "styled-components";
import { StyledDayT, StyledDayHeaderT } from "./types";

export const StyledDay = styled.div<StyledDayT>`
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 100%;
  width: ${(props) => (props.dayWidth ? `${props.dayWidth}px` : "100%")};
`;

export const StyledDayHeader = styled.div<StyledDayHeaderT>`
  color: ${(props) => (props.theme.color ? props.theme.color : "#1F1F1F")};
  font-size: ${(props) => (props.theme.fontSize ? props.theme.fontSize : 21)}px;
  padding: ${(props) => (props.theme.padding ? props.theme.padding : 4)}px;
`;
