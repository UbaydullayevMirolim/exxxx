require("dotenv").config();
const express = require("express");
const routes = require("./routes/index")

const PORT = process.env.PORT || 3003
const app = express();

app.use(express.json());
app.use("/", routes);



app.listen(PORT, (req, res) => {
    console.log(PORT);
});