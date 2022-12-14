import EMonths from '@/models/Enumarables/Times/month';

const getMonthName = (month: number): string | null => {
    return EMonths[month + 1];
};

export default getMonthName;
