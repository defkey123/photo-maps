//dependencies
const express = require('express');
const app = express();
const bp = require('body-parser');
const routes = require('./routes');

var path = require('path');

//middleware
app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));


//routes
routes(app);

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
  });

//server listener
app.listen(8000, function(){
    console.log("listening on port 8000");
});