import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`, (err) => {
            if (err) {
                return res.status(403).send({ message: 'Token is not valid' });
            }
            next();
        });
    } else {
        return res.status(401).send({
            message: 'Auth failed',
        });
    }
};

export { checkAuth };
