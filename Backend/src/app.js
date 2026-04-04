const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes")


app.use("/ai", aiRoutes);



module.exports = app;