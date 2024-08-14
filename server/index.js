const express = require("express");
const router = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(cors());    
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
