const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true, useFindAndModify: false })

// require the routes
app.use(require("./routes/api_routes"));
app.use(require("./routes/html_routes"));


// confirms the server is listening on designated PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});