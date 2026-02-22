import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { config } from './config';
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 4000;
console.log('config loaded ========>', config);
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

