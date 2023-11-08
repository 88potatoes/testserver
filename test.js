const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const port = 443;

app.use("/", (req, res) => {
    res.send("muhahahaha");
})

const privateKey = fs.readFileSync('somepath', 'utf8');
const certificate = fs.readFileSync('somepath', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
    console.log("listening on port:", port);
});