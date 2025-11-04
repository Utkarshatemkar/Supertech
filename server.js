const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact form route
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("📩 New Message:", name, email, message);
    res.json({ message: `Thank you ${name}, we received your message!` });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
