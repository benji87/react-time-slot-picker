export type TimeSlotT = StyledLabelTextT &
  StyledInputT & {
    delimiter?: string;
    disabled?: boolean;
    handleSelection?: (id: number, e?: any) => void;
    id: any;
    key?: any;
    label?: string;
    name?: string;
    startTime: string;
    endTime?: string;
    timeSlotFormat?: string;
    type?: "checkbox" | "radio";
  };

export type StyledLabelTextT = {
  color?: string;
  border?: string;
  borderRadius?: number;
  boxShadow?: string;
  fontSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  verticalMargin?: number;
};

export type StyledInputT = {
  disabledBackgroundColor?: string;
  disabledColor?: string;
  focusOutlineColor?: string;
  hoverBackgroundColor?: string;
  selectedBackgroundColor?: string;
  selectedBorderColor?: string;
  selectedColor?: string;
};
