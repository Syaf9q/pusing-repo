const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
// parse html req
app.use(express.urlencoded({ extended: false }));
//parse data from js's json
app.use(express.json());

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: "Please Provide Credential" });
    }
    res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`welcome ${name}`);
    }

    res.status(401).send("provide crendential");
});

app.listen(5000, () => {
    console.log("listening 5000...");
});
