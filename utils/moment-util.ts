import moment from "moment-timezone";

type InputType = Date | string | null;

const transform = (format: string, dt?: InputType) =>
  moment(dt).tz("Africa/Lagos").format(format);

const isPastDay = (dt: InputType) =>
  moment.utc(dt).isBefore(moment.utc(), "day");

// Sun, 1 Jan 1970 | 9:00 AM
const verbose = (dt?: InputType) => transform("ddd, D MMM YYYY | h:mm A", dt);

// 9/14/2022
const stdDate = (dt?: InputType) => transform("M/D/YYYY", dt);

// 5:12 PM
const stdTime = (dt?: InputType) => transform("h:mm A", dt);

export const momentUtil = { isPastDay, verbose, stdDate, stdTime };

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const QUARTER = ["Q1", "Q2", "Q3", "Q4"];