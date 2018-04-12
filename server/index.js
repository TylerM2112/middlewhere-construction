const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));