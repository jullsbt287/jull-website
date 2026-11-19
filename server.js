const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// Menyajikan website JULL yang sudah ada; autentikasi tetap memakai Supabase.
app.use(express.static(__dirname, { extensions: ["html"] }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", website: "JULL", hosting: "node-express" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Website JULL berjalan di http://localhost:${PORT}`);
});
