const express = require("express");

const app = express();

app.use(express.json());

app.get("/book", (req, res) => {

    res.send("List of books");

});

app.post("/book", (req, res) => {

    console.log(req.body);

    res.send("Book added successfully");

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});


app.patch("/book", (req, res) => {

    console.log(req.body);

    res.send("Book added successfully");

});
