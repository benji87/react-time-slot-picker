import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AvailabilityCalendarT, DaySingleT, SlotT } from "./types";
import { Theme } from "../context/theme";
import {
  StyledAvailabilityCalendar,
  StyledContainer,
  StyledNavContainer
} from "./styles";
import { useCurrentWidth } from "../hooks";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { Button } from "../Button/Button";
import { DayAvailability } from "../DayAvailability";
import { Spinner } from "../Spinner";

export const AvailabilityCalendar = (props: AvailabilityCalendarT) => {
  const {
    availability,
    dayFormat,
    daysVisible,
    handleSelectedTimeSlot,
    handleSelection,
    handleNavigation,
    maxSelection,
    mobileBreakpoint,
    leftButtonContent,
    rightButtonContent,
    loading,
    weekdayFormat,
    timeSlotDelimiter,
    timeSlotFormat,
    selectionType,
    showNav,
    spinnerColor,
    spinnerLabel,
    theme
  } = props;
  const [selection, setSelection] = useState<any>([]);
  const [disableOptions, setDisableOptions] = useState<boolean>(false);
  const [_loading, setLoading] = useState<boolean | undefined>(loading);
  const [dayWidth, setDayWidth] = useState<number>(0);
  const [_showNav, setShowNav] = useState<boolean | undefined>(showNav);
  const [navControls, setNavcontrols] = useState<{
    left: boolean;
    right: boolean;
  }>({
    left: true,
    right: false
  });
  const [_daysVisible, setDaysVisible] = useState(daysVisible);
  const container = useRef<any>(null);
  const currentWidth = useCurrentWidth();

  useEffect(() => {
    setDaysVisible(
      mobileBreakpoint && mobileBreakpoint < currentWidth ? daysVisible : 1
    );
  }, [daysVisible, mobileBreakpoint, currentWidth]);

  useEffect(() => {
    setDayWidth(
      Math.ceil(
        container.current!.offsetWidth /
          (_daysVisible < availability.length
            ? _daysVisible
            : availability.length)
      )
    );
  }, [_daysVisible, setDayWidth, dayWidth, availability.length, currentWidth]);

  useEffect(() => {
    const setDisabled =
      (selectionType && selectionType !== "single") ||
      (maxSelection && selection.length >= maxSelection);
    setDisableOptions(setDisabled ? setDisabled : false);
  }, [disableOptions, maxSelection, selection, selectionType]);

  const _handleNavigation = useCallback(
    (direction: "left" | "right") => {
      container.current.scrollLeft =
        direction === "right"
          ? (container.current.scrollLeft = Math.ceil(
              container.current.scrollLeft + dayWidth! * _daysVisible!
            ))
          : container.current.scrollLeft - dayWidth! * _daysVisible!;
      let left =
        direction === "left" &&
        container.current.scrollLeft <= 0 &&
        !navControls.left;
      let right =
        direction === "right" &&
        container.current.scrollLeft >=
          Math.ceil(dayWidth! * (availability.length - _daysVisible!));
      setNavcontrols({
        left,
        right
      });

      if (handleNavigation) {
        handleNavigation(direction);
      }
    },
    [
      _daysVisible,
      navControls,
      container,
      dayWidth,
      availability.length,
      handleNavigation
    ]
  );

  useEffect(() => {
    setShowNav(availability.length <= _daysVisible! ? false : true);
  }, [_daysVisible, availability.length]);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (handleSelection) {
      handleSelection(selection);
    }
  }, [handleSelection, selection]);

  const _handleSelectedTimeSlot = (id: number, e?: any) => {
    const selectionExists = selection.some((slot: SlotT) => slot.id === id);
    if (!selectionExists) {
      const selectionDetail = availability
        .flatMap((day: DaySingleT) => day.timeSlots)
        .find((slot: SlotT) => slot.id === id);
      setSelection(
        selectionType === "single"
          ? [selectionDetail]
          : [...selection, selectionDetail]
      );
    } else {
      const newSelection = selection.filter((currentSelection: SlotT) => {
        return currentSelection.id !== id;
      });
      setSelection(newSelection);
    }
    if (handleSelectedTimeSlot) {
      handleSelectedTimeSlot(id, e);
    }
  };

  return (
    <Theme.Provider value={theme}>
      <StyledContainer>
        {_showNav && !loading ? (
          <>
            <StyledNavContainer>
              <Button
                disabled={navControls.left}
                handleClick={() => {
                  _handleNavigation("left");
                }}
              >
                {leftButtonContent ? leftButtonContent : <FiArrowLeft />}
              </Button>
            </StyledNavContainer>
            <StyledNavContainer style={{ order: 3 }}>
              <Button
                disabled={navControls.right}
                handleClick={() => {
                  _handleNavigation("right");
                }}
              >
                {rightButtonContent ? rightButtonContent : <FiArrowRight />}
              </Button>
            </StyledNavContainer>
          </>
        ) : null}
        <StyledAvailabilityCalendar ref={container} theme={theme}>
          {_loading ? (
            <Spinner color={spinnerColor} label={spinnerLabel} />
          ) : (
            <DayAvailability
              availability={availability}
              disableOptions={disableOptions}
              selection={selection}
              selectionType={selectionType}
              dayFormat={dayFormat}
              weekdayFormat={weekdayFormat}
              timeSlotDelimiter={timeSlotDelimiter}
              timeSlotFormat={timeSlotFormat}
              handleSelectedTimeSlot={(id, e) => _handleSelectedTimeSlot(id, e)}
              dayWidth={dayWidth}
            />
          )}
        </StyledAvailabilityCalendar>
      </StyledContainer>
    </Theme.Provider>
  );
};

AvailabilityCalendar.propTypes = {
  availability: PropTypes.array.isRequired,
  daysVisible: PropTypes.number,
  handleSelectedTimeSlot: PropTypes.func,
  handleNavigation: PropTypes.func,
  maxSelection: PropTypes.number,
  mobileBreakpoint: PropTypes.number,
  weekdayFormat: PropTypes.string,
  dayFormat: PropTypes.string,
  loading: PropTypes.bool,
  leftButtonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rightButtonContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  timeSlotDelimiter: PropTypes.string,
  timeSlotFormat: PropTypes.string,
  selectionType: PropTypes.oneOf(["multiple", "single"]),
  showNav: PropTypes.bool,
  spinnerColor: PropTypes.string,
  spinnerLabel: PropTypes.string,
  theme: PropTypes.object.isRequired
};
