import styled from "styled-components";
import { StyledSpinnerLabelT } from "./types";

export const StyledSpinner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 ${(props) => (props.theme.padding ? props.theme.padding : 32)}px;
  width: 100%;
`;

export const StyledSpinnerLabel = styled.div<StyledSpinnerLabelT>`
  font-size: ${(props) =>
    props.theme.fontSize ? props.theme.fontSize : "inherit"};
  font-weight: ${(props) =>
    props.theme.fontWeight ? props.theme.fontWeight : "normal"};
  margin-left: ${(props) =>
    props.label && props.marginLeft ? props.marginLeft : 16}px;
`;
