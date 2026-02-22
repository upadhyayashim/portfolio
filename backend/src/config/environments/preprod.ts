export default {
    DB_URL: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio_db",
    JWT_SECRET: "preprod-secret",
    LOG_LEVEL: "warn",
};
