const express = require("express");
const app = express();

// setting up ports
port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));
