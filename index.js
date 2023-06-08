const express = require('express');
const port = 3000;
const app = express();
const router = require('./routes/index');

//setting assets
app.use(express.static("./assets"));

// Setting the ejs template engine
app.set('view engine' , 'ejs');
app.set('views' , './views');

// Mouting the routers
app.use('/' , router);

app.listen(port, ()=> {
    console.log("Server is running on port:", port);
})