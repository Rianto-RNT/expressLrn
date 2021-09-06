const Express = require("express");
const bodyParser = require("body-parser");
const { request, response } = require("express");
const PORT = 3000;

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// app.listen(49146, () => {});
app.listen(PORT, () => console.log(`App has been running in port: ${PORT}`));

app.get("/", (request, response) => {
    response.send('Hello Express World !');
});

