export const basicTemplateTS = `import express, { Request, Response } from "express";
import chalk from "chalk";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());

const PORT: number = parseInt(process.env.PORT || "5001", 10);

app.get("/home", (_: Request, res: Response) => {
  res.send("THIS IS /HOME ROUTE");
});

app.get("/api/home", (_: Request, res: Response) => {
  res.json({
    msg: "THIS IS /HOME ROUTE",
  });
});

app.post("/api/intro", (req: Request, res: Response) => {
  const { name } = req.body as { name?: string };
  if (!name) {
    return res.status(400).json({ msg: "Name is required in request body" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
});

app.post("/api/introquery", (req: Request, res: Response) => {
  const { name } = req.query as { name?: string };
  if (!name) {
    return res.status(400).json({ msg: "Name is required in query params" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
});

app.listen(PORT, () => {
  const url = \`http://localhost:\${PORT}\`;
  console.log(\`Server running at: \${chalk.green(url)}\`);
});`;
