import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import blogRoute from "./routes/blog.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/blog", blogRoute);

const PORT = 5000;
const CONNECTION_URL =
  "mongodb://blog:blog123@cluster0-shard-00-00.hf5pm.mongodb.net:27017,cluster0-shard-00-01.hf5pm.mongodb.net:27017,cluster0-shard-00-02.hf5pm.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-87gv9i-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log("sv is running")))
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
