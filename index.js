const express = require("express");
const app = express();
const studentRoutes = require("./routers/studentroute");

// Middleware
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
