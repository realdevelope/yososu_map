const express = require( 'express' );
const mysql = require( 'mysql' );
const app = express();
const port = 8000;
const body = require( 'body-parser' );

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use( '/static/images', express.static( __dirname + '/static/images') );

app.get('/', (req, res) => {
    res.render('asdasd');
});

app.listen(port, () => {
    console.log('8000!');
});
