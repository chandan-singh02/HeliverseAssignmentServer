const dotenv = require("dotenv");
const app = require("./app");

const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  });

app.get("/", (req, res) => {
  res.end("this server");
});
app.listen(4000, (req, res) => {
  console.log("server is starting");
});
