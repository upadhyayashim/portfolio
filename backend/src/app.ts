import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import router from './routes/route';
import path from 'path';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"))
);

// all APIs under /api
app.use("/api", router);

app.use(errorHandler);

export default app;