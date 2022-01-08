import { Request, Response, NextFunction } from 'express';

const errorHandler = (req: Request, res: Response, next: NextFunction): void =>{
    res.status(500).json('Something broke!');
};

export default errorHandler;