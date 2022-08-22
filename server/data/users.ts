import bcryptjs from 'bcryptjs';

const users = [
    {
        fullname: 'Özkan Parlakkılıç',
        email: 'prlkklc@gmail.com',
        password: bcryptjs.hashSync('1', 10),
        isAdmin: true,
        friends: [],
    },
    {
        fullname: 'Ömer Parlakkılıç',
        email: 'omerkral@gmail.com',
        password: bcryptjs.hashSync('123456789', 10),
        friends: [],
    },
    {
        fullname: 'Ekrem Parlakkılıç',
        email: 'ekoizm@gmail.com',
        password: bcryptjs.hashSync('159852', 10),
        friends: [],
    },
];

export default users;
