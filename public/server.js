const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve all files in public/
app.use(express.static(path.join(__dirname, "public")));

// Home route → redirect to /app
app.get("/", (req, res) => {
  res.redirect("/app");
});

// Load the app view
app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Bradley Vaults running at http://localhost:${PORT}`);
});
