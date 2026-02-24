import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import router from './routes/route';
import path from 'path';

const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "https://ashimupadhyay-portfolio.vercel.app"
];

app.use(helmet());
// app.use(cors());  
app.use(cors({
origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
    callback(null, true);
    } else {
    callback(new Error("Not allowed by CORS"));
    }
},
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