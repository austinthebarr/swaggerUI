const express = require("express");
const swaggerUi = require("swagger-ui-express");
const ymlfile = require("./documentation")

const app = express();

process.env.PORT = 8080

app.use('/api', swaggerUi.serve, swaggerUi.setup(ymlfile));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node JS API is listening on port: ${port}`);
});