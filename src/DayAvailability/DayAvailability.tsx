import React, { useContext } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Theme } from "../context/theme";
import { DayAvailabilityT, SlotT, DayT } from "./types";
import { StyledDay, StyledDayHeader } from "./styles";

import { TimeSlot } from "../TimeSlot";

export const DayAvailability = (props: DayAvailabilityT) => {
  const {
    availability,
    disableOptions,
    handleSelectedTimeSlot,
    weekdayFormat,
    dayFormat,
    timeSlotDelimiter,
    selection,
    selectionType,
    timeSlotFormat
  } = props;

  const theme = useContext(Theme);

  const checkSelection = (id: number) => {
    const selectionExists = selection.some((slot: SlotT) => slot.id === id);
    return !selectionExists;
  };

  const days = availability.map((day: DayT) => {
    const weekday = moment
      .unix(day.datetime)
      .format(weekdayFormat ? weekdayFormat : "ddd");
    const date = moment
      .unix(day.datetime)
      .format(dayFormat ? dayFormat : "MMM D");
    const timeSlots = day.timeSlots.map((slot: SlotT) => {
      return (
        <TimeSlot
          key={slot.id}
          id={slot.id}
          delimiter={timeSlotDelimiter}
          disabled={
            !slot.availability || (disableOptions && checkSelection(slot.id))
          }
          startTime={slot.startTime}
          endTime={slot.endTime}
          handleSelection={(id, e) => {
            handleSelectedTimeSlot(id, e);
          }}
          name={"timeslot"}
          timeSlotFormat={timeSlotFormat}
          type={selectionType === "single" ? "radio" : "checkbox"}
        />
      );
    });
    return (
      <StyledDay key={day.id} {...props}>
        <StyledDayHeader theme={theme}>
          <strong>{weekday}</strong>
          <br />
          {date}
        </StyledDayHeader>
        {timeSlots}
      </StyledDay>
    );
  });
  return days;
};

DayAvailability.propTypes = {
  availability: PropTypes.array.isRequired,
  dayWidth: PropTypes.number.isRequired,
  disableOptions: PropTypes.bool.isRequired,
  handleSelectedTimeSlot: PropTypes.func,
  weekdayFormat: PropTypes.string,
  dayFormat: PropTypes.string,
  timeSlotDelimiter: PropTypes.string,
  selection: PropTypes.array,
  selectionType: PropTypes.oneOf(["single", "multiple"]),
  timeSlotFormat: PropTypes.string
};
