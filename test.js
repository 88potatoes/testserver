const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send("muhahahaha");
})

app.listen(8001, () => {
    console.log("im listening");
});