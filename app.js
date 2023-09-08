const express = require("express");
const app = express();
const peopleRouter = require("./router/people");
const logRouter = require("./router/auth");

app.use(express.static("./methods-public"));
// parse html req
app.use(express.urlencoded({ extended: false }));
//parse data from js's json
app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", logRouter);

app.listen(5000, () => {
    console.log("listening 5000...");
});
