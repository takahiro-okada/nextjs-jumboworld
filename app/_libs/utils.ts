import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Blog } from "./microcms";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string) => {
  return dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
};

export const formatYearMonth = (date: string) => {
  const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY_MM");
  return formattedDate;
};

export const groupBy = function (contents: Blog[]) {
  return contents.reduce(function (group: { [key: string]: Blog[] }, x: Blog) {
    const yearMonthString = formatYearMonth(x.publishedAt);
    (group[yearMonthString] = group[yearMonthString] || []).push(x);
    return group;
  }, {});
};
