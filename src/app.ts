/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import sendResponse from './app/utils/sendResponse';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// application routes
app.use('/api/v1', router);

// const test = async (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

app.get('/', (req: Request, res: Response) => {
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'University Managment Server Running Successfully!',
        data: [],
      });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
