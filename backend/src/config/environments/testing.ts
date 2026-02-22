export default {
    env: "test",
    port: 0, // random available port
    jwt: {
      secret: "test-secret",
      expiresIn: "1h",
    },
    db: {
      uri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio_db",
    },
  };
  