const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes")
const cors = require("cors");
const rateLimiter = require("express-rate-limit");

const limiter = rateLimiter({
    windowMs : 1 * 60 * 1000, // 1 minute
    max : 5, 
    message : "Too Many Requesting Are Sending by User, Please Try Again After One Minute"
})


app.use(express.json());
app.use(cors());


app.use("/ai", limiter,aiRoutes);



module.exports = app;