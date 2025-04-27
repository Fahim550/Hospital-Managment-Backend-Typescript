import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("hello fahim");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
