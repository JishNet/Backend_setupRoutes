import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';

dotenv.config();


const app = express();

app.use(express.json());

app.use("/", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

