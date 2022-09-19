import validateEmail from '../inputValueCheck/validateEmail';

describe('Validate Email', () => {
    it('validate email function should pass on correct input', () => {
        const email = 'testing@gmail.com';
        const result = validateEmail(email);
        expect(result).toBe(true);
    });

    it('validate email function should fail on incorrect input', () => {
        const email = 'testing';
        const result = validateEmail(email);
        expect(result).toBe(false);
    });
});
