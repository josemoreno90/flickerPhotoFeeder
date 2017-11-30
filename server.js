const express = require('express');
const app = express();


app.use(express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render("home")
})

app.listen(process.env.PORT, process.env.IP);
