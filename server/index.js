var express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/dbConnect");
const Task = require('./model/tickets')

const PORT = 5000;
const app = express();
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/ticket", async (req, res) => {
  try {
    const output = await Task.find().limit(20);
    res.status(201).json(output);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/ticket/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const output = await Task.find({ _id: id })

    res.status(201).json(output);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/ticket", async (req, res) => {
  const formData = req.body.formData;

  try {
    const result = await Task.create(formData)
    console.log(result)

    res.status(201).json({'success': result})
  } catch (err) {
    res.status(500).json({'message': err.message})
  }
});

app.put("/ticket/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.formData
  console.log(data)
  console.log(id)

  try {
    const updateTicket = await Task.updateOne({ _id: id }, { $set: data});

    res.status(201).json({ success: updateTicket });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  
}); 

app.delete("/ticket/:id", async (req, res) => {
  const id = req.params.id

  try {
    await Task.deleteOne({ _id: id });

     res.status(201).json({ 'success': 'Ticket deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  } 
})

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, () =>
  console.log(`Server on http://localhost:${PORT}`)
);
