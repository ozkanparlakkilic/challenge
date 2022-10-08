export const getDateWithoutTimezone = (date: Date | string): Date => {
    let d = new Date(date);
    let userTimezoneOffset = d.getTimezoneOffset() * 60000;
    return new Date(d.getTime() + userTimezoneOffset);
};
