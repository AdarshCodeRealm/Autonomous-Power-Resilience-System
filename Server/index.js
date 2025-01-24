import express from "express";

const app = express();
const port = 3000;


console.log("sevreee")
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js server.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
