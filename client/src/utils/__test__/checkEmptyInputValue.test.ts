import { checkEmptyInputValue } from '@/utils';

describe('Check empty value', () => {
    it('input value not equal ""', () => {
        const text = 'Testing';
        const result = checkEmptyInputValue(text);
        expect(result).toBe(true);
    });

    it('input value equal ""', () => {
        const text = '';
        const result = checkEmptyInputValue(text);
        expect(result).toBe(false);
    });
});
