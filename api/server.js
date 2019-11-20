const express = require("express");
const mongoose = require('mongoose');
const db = require("./config/database.json");
const helmet = require('helmet')


const app = express();
const PORT = 5000;

// ENVIRONMENT
const isProduction = process.env.NODE_ENV === "production";

// Connect to MongoDB
const databaseURL = isProduction ? db.Prod : db.Dev;
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Setting HTTP headers with Helmet
app.use(helmet());


// MODELS
require("./models");


app.get("/", (req, res) => res.send({
    "ok": true
}));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));