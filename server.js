require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// endpoint :http://localhost:3000/person?name=Mohamad
app.get("/person", (req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
