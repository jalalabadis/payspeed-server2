const express = require("express");
const path = require('path');


//App initialization
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

//App Routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


////listen server
app.listen(PORT, ()=>{
    console.log('Server run port '+PORT);
    });
