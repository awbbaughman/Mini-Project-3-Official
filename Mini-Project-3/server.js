const express = require("express");
const app = express();


let dbConnect = require("./dbConnect");

require("dotenv").config();

app.use(express.json());

    app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8001;

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


app.listen(PORT, () => {
console.log(`Server is running on port${PORT}.`);
});