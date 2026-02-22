export default {
    DB_URL: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio_db",
    JWT_SECRET: "local-secret",
    LOG_LEVEL: "debug",
};
