const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
