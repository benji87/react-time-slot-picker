import styled from "styled-components";
import { StyledAvailabilityCalendarT } from "./types";

export const StyledAvailabilityCalendar = styled.div<
  StyledAvailabilityCalendarT
>`
  display: flex;
  flex-wrap: nowrap;
  font-family: ${(props) =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`};
  overflow-x: hidden;
  text-align: center;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNavContainer = styled.div`
  display: flex;
`;
