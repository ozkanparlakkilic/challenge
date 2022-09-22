import getMonthName from '../date/getMonthName';

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

describe('Check empty value', () => {
    it('check exists value', () => {
        const firstMonth = 1;
        const secondMonth = 3;
        const firstResult = getMonthName(firstMonth);
        const secondResult = getMonthName(secondMonth);
        expect(firstResult).toBe(monthNames[firstMonth - 1]);
        expect(secondResult).toBe(monthNames[secondMonth - 1]);
    });

    it('check not exists value', () => {
        const firstMonth = 0;
        const secondMonth = 14;
        const firstResult = getMonthName(firstMonth);
        const secondResult = getMonthName(secondMonth);
        expect(firstResult).toBeNull();
        expect(secondResult).toBeNull();
    });
});
