export const controllerCode3TS = `import { Request, Response } from "express";

export const getHome = (_: Request, res: Response) => {
  res.json({
    msg: "THIS IS /HOME ROUTE",
  });
};

export const greetFromBody = (req: Request, res: Response) => {
  const { name } = req.body as { name?: string };
  if (!name) {
    return res.status(400).json({ msg: "Name is required in request body" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
};

export const greetFromQuery = (req: Request, res: Response) => {
  const { name } = req.query as { name?: string };
  if (!name) {
    return res.status(400).json({ msg: "Name is required in query params" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
};
`;

export const routerCode3TS = `import express from "express";
import {
  getHome,
  greetFromBody,
  greetFromQuery,
} from "../controllers/routeController.js";

const router = express.Router();

router.get("/home", getHome);

router.post("/intro", greetFromBody);

router.post("/introquery", greetFromQuery);

export default router;
`;
