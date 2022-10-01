import bcrypt from 'bcrypt';

const users = [
    {
        fullname: 'Özkan Parlakkılıç',
        username: 'Ozkan54',
        email: 'prlkklc@gmail.com',
        password: bcrypt.hashSync('1', 10),
        isAdmin: true,
        friends: [],
    },
    {
        fullname: 'Ömer Parlakkılıç',
        username: 'Omer54',
        email: 'omerkral@gmail.com',
        password: bcrypt.hashSync('123456789', 10),
        friends: [],
    },
    {
        fullname: 'Ekrem Parlakkılıç',
        username: 'Ekrem54',
        email: 'ekoizm@gmail.com',
        password: bcrypt.hashSync('159852', 10),
        friends: [],
    },
];

export default users;
