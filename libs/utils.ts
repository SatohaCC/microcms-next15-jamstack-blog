import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: any) => {
    const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD");
    return formattedDate;
};

export const formatDateTime = (date: any) => {
    const formattedDate = dayjs.utc(date).tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm");
    return formattedDate;
};
