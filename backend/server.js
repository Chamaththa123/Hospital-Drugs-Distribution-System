const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;

const corsOptions = {
    orign:"*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });