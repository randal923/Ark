const express = require("express");
const mongoose = require('mongoose');
const db = require("./config/database.json");
const helmet = require('helmet')
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

// Start
const app = express();

// ENVIRONMENT
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 5000;

//Static
app.use("/public", express.static(__dirname + "/public"));
app.use("/public/images", express.static(__dirname + "/public/images"));

// Connect to MongoDB
const databaseURL = isProduction ? db.Prod : db.Dev;
mongoose.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Configurations
if (!isProduction) app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

//Body Parser
app.use(bodyParser.urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }));
app.use(bodyParser.json({ limit: 1.5 * 1024 * 1024 }));

// Models
require("./models");

//Routes
app.use("/", require("./routes"));

//404 - Route
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Routes 422, 500, 401
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.status !== 404) console.warn("Error: ", err.message, new Date());
    res.json(err);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));