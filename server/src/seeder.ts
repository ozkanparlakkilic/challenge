import dotenv from 'dotenv';
import dbConn from './config/dbConn';

import User from './models/userModel';
import Quiz from './models/quizModel';

import users from './data/users';
import quizzes from './data/quizzes';

dotenv.config();
dbConn();

const importData = async () => {
    try {
        await User.deleteMany();
        await Quiz.deleteMany();
        await User.insertMany(users);
        await Quiz.insertMany(quizzes);

        console.log('Data imported');
        process.exit();
    } catch (e) {
        console.log(`${e}`);
    }
};

importData();
