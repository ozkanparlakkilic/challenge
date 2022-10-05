import EMonths from '@/models/Enumarables/Times/month';

const getMonthName = (month: number): string | null => {
    return EMonths[month];
};

export default getMonthName;
