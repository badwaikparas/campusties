import moment from "moment/moment"

const timeFormat = "MMMM D, YYYY h:mm A"

export const getCurrentTimeStamp = (timeFormat) => {
    return moment().format(timeFormat)
}

export const getDateObjectFromMoment = (timeString) => {
    const dateObj = moment(timeString, timeFormat).toDate();
    // console.log(dateObj);
    return dateObj;
};

