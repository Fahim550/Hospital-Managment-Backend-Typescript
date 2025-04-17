import cors from "cors";
import express from "express";
import router from "./app/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("hello fahim");
});

export default app;
