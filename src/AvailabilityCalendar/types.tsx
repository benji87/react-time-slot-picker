import { ReactElement } from "react";
import { ThemeT } from "../context/theme";

export type AvailabilityCalendarT = {
  availability: DayT;
  daysVisible?: any;
  handleSelection?: (selection: any) => void;
  handleSelectedTimeSlot?: (id: number, e?: any) => void;
  handleNavigation?: (direction: "left" | "right") => void;
  maxSelection?: number;
  mobileBreakpoint?: number;
  weekdayFormat?: string;
  dayFormat?: string;
  loading?: boolean;
  leftButtonContent?: ReactElement | string;
  rightButtonContent?: ReactElement | string;
  timeSlotDelimiter?: string;
  timeSlotFormat?: string;
  selectionType?: "multiple" | "single";
  showNav?: boolean;
  spinnerColor?: string;
  spinnerLabel?: string;
  theme: ThemeT;
};

export type SlotT = {
  id: number;
  startTime: string;
  endTime: string;
  availability: boolean;
};

export type DayT = {
  id: number;
  datetime: string;
  timeSlots: SlotT[];
}[];

export type DaySingleT = {
  id: number;
  datetime: string;
  timeSlots: SlotT[];
};

export type StyledAvailabilityCalendarT = {
  fontFamily?: string;
};
