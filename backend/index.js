const express = require("express");
const cors = require("cors");
const users = require("./routes/users");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Use the users route
app.use(users);

// Start the server
app.listen(4000, () => {
  console.log("listening on 4000");
});
