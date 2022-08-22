import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConn from './config/dbConn';

dotenv.config();
dbConn();

const app: express.Application = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`);
});
