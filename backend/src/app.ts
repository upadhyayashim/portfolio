import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import router from './routes/route';
import path from 'path';

const app = express();

app.use(helmet());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://your-frontend-url.vercel.app"
    ],
    credentials: true
}));
app.use(express.json());
app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"))
);

// all APIs under /api
app.use("/api", router);

app.use(errorHandler);

export default app;