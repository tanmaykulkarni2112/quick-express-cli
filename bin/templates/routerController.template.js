export const controllerCode3 = `export const getHome = (_, res) => {
  res.json({
    msg: "THIS IS /HOME ROUTE",
  });
};

export const greetFromBody = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "Name is required in request body" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
};

export const greetFromQuery = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ msg: "Name is required in query params" });
  }
  res.status(200).json({
    msg: \`Hello \${name}\`,
  });
};
`;

export const routerCode3 = `import express from "express";
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
