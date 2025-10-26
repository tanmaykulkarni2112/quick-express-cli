export const serverCode2TS = `import express from "express";
import chalk from "chalk";
import dotenv from "dotenv";
import router from "./routes/router.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use("/api", router);

const PORT = parseInt(process.env.PORT || "5001", 10);

app.get("/home", (req, res) => {
  res.send("THIS IS /HOME ROUTE");
});

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`Server running at: ${chalk.green(url)}`);
});
`;

export const routerCode2TS = `import express from "express";
const router = express.Router();

router.get("/home", (req, res) => {
  res.json({
    msg: "THIS IS /HOME ROUTE",
  });
});

router.post("/intro", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "Name is required in request body" });
  }
  res.status(200).json({
    msg: `Hello ${name}`,
  });
});

router.post("/introquery", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ msg: "Name is required in query params" });
  }
  res.status(200).json({
    msg: `Hello ${name}`,
  });
});

export default router;
`;