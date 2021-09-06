const express = require('express');

const app = express();

const PORT = 3000;

app.get("/", (req, res, next) => {
    res.send("Hello Express World");
});

app.get("/glints", (req, res, next) =>{
    res.send("Hallo Glints");
});

app.listen(PORT, () => console.log(`App has been running in port: ${PORT}`));