const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const getMonthName = (month: number): string => {
    return monthNames[month - 1];
};

export default getMonthName;
