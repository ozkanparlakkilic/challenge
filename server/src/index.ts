import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConn from './config/dbConn';
import routes from './routes';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

dotenv.config();
dbConn();

const app: express.Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started in ${PORT} mode = ${process.env.NODE_ENV}`);
});
