import moment from "moment";

export const formatTimeSlot = (
  startTime: string,
  endTime?: string,
  delimiter?: string,
  format?: string
) => {
  return (
    moment.unix(parseInt(startTime, 0)).format(format ? format : "HH:mm") +
    (endTime
      ? (delimiter ? delimiter : " - ") +
        moment.unix(parseInt(endTime, 0)).format(format ? format : "HH:mm")
      : "")
  );
};
