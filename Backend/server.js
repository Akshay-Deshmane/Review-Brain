require("dotenv").config();
const app = require("./src/app");

//const main = require("./src/services/ai.service")

//main();

app.listen(3000, () => {
    console.log("server is started successfully");
})


