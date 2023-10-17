const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Crud Is Running In The Background....')
})

app.listen(port, () => {
  console.log(`Simple Crud Is Running On Port ${port}`);
})