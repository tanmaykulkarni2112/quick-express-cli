
export const getHome = (req, res) => {
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
    msg: `Hello ${name}`,
  });
};

export const greetFromQuery = (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ msg: "Name is required in query params" });
  }
  res.status(200).json({
    msg: `Hello ${name}`,
  });
};
