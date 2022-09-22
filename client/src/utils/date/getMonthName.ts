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

const getMonthName = (month: number): string | null => {
    if (month < 1 || month > monthNames.length + 1) return null;
    return monthNames[month - 1];
};

export default getMonthName;
