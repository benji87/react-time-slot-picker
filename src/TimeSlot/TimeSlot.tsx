import React, { useContext } from "react";
import PropTypes from "prop-types";
import { formatTimeSlot } from "../utils";
import { Theme } from "../context/theme";
import { StyledTimeSlot, StyledLabelText, StyledInput } from "./styles";
import { TimeSlotT } from "./types";
import { Label } from "../Label";

export const TimeSlot = (props: TimeSlotT) => {
  const {
    delimiter,
    disabled,
    handleSelection,
    id,
    label,
    name,
    startTime,
    endTime,
    timeSlotFormat,
    type
  } = props;

  const theme = useContext(Theme);

  return (
    <StyledTimeSlot {...props}>
      <Label>
        <>
          <StyledInput
            id={label}
            type={type ? type : "checkbox"}
            onChange={(e) =>
              handleSelection ? handleSelection(id, e) : undefined
            }
            name={name || label}
            value={label}
            disabled={disabled}
            theme={theme}
          />
          <StyledLabelText theme={theme}>
            {formatTimeSlot(
              startTime,
              endTime,
              delimiter ? delimiter : "",
              timeSlotFormat ? timeSlotFormat : undefined
            )}
          </StyledLabelText>
        </>
      </Label>
    </StyledTimeSlot>
  );
};

TimeSlot.propTypes = {
  delimited: PropTypes.string,
  disabled: PropTypes.bool,
  handleSelection: PropTypes.func,
  id: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  timeSlotFormat: PropTypes.string,
  type: PropTypes.oneOf(["checkbox", "radio"])
};
