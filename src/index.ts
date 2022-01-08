import express, { Request, Response, NextFunction } from 'express';
import { AppRouter } from './helpers/AppRouter';
import errorHandler from './helpers/errorHandler';
import './controllers/saveData';

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(AppRouter.getInstance());
app.use(errorHandler);

app.listen(4000, () => {
    console.log('listening on port 4000');
});

export default app;