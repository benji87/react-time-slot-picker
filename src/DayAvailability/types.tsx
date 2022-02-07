export type DayAvailabilityT = {
  availability: any;
  dayWidth: number;
  disableOptions: boolean;
  handleSelectedTimeSlot: (id: number, e: any) => void;
  weekdayFormat?: string;
  dayFormat?: string;
  timeSlotDelimiter?: string;
  selection: any;
  selectionType?: "single" | "multiple";
  timeSlotFormat?: string;
};

export type SlotT = {
  id: number;
  startTime: string;
  endTime: string;
  availability: boolean;
};

export type DayT = {
  id: number;
  datetime: number;
  timeSlots: SlotT[];
};

export type StyledDayT = {
  dayWidth?: number;
};

export type StyledDayHeaderT = {
  fontSize?: number;
  padding?: number;
};
