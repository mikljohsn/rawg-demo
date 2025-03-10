import express from 'express';
import init from './startup/init';

const app = express();


init(app)


app.get("/", (req, res) => {  
  res.send("Hello World");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port`, PORT);
});
