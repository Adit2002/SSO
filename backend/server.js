require("dotenv").config();
const { urlencoded, json } = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const server = http.createServer(app);
const ssoschema = require("./GJ.js");
mongoose
  .connect(process.env.MONGOOSE_API_KEY)
  .then((p) => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));
server.listen(3001, () => {
  console.log("Server Running on port 3001");
});
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.post("/Create", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const payload = {
    name: name,
    email: email,
  };
  try {
    const user = await ssoschema.findOne({ email: email });
    const token = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: "2h",
    });
    if (!user) {
      return res.send({
        is: 2,
        message: "User does not exist create new",
        token: token,
      });
    }
    return res.send({ is: 1, message: "User found",token: token, user: user });
  } catch (err) {
    console.log(err);
    return res.send({ is: 0, err: err });
  }
});
app.post('/AddData', async (req, res) => {
  try {
      const u = await ssoschema.create({
          name: req.body.name, // Assuming you're passing the name and email in the request
          email: req.body.email,
          contact_number: req.body.phoneNumber,
          address: req.body.address
      });
      return res.send({ is: 1, message: "Successfully added", user: u });
  } catch (err) {
      console.error(err); // Corrected from console.log
      return res.status(500).send({ is: 0, message: "Error occurred while adding data" });
  }
});
