module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "SADAHSDhsyd78zsTZS&^dctz76CTZ&XTCzxct",
    api: process.env.NODE_ENV === "production" ? "" : "http://localhost:5000",
    store: process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
};