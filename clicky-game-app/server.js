// ============== DEPENDENCIES ==============
const express = require("express");

// ============= EXPRESS CONFIG =============
const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
}

// ============= LISTENER INFO ==============
app.listen(PORT, function() {
    console.log(`🌎 ==> App is now listening on PORT ${PORT}!`);
  });