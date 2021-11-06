const express = require('express')
const app = express()
const port = 4000 //Port it listens to
const cors = require('cors');
const bodyParser= require('body-parser');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', (req, res) => {//Home page called sends this message
  res.send('Welcome to DataRepresentation & Querying')//Sends message
})

app.get('/api/movies',(req, res)=> { //Listens on this
    const mymovies= [
        {
            "Title":"Avengers: Infinity War",
            "Year":"2018",
            "imdbID":"tt4154756",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title":"Captain America: Civil War",
            "Year":"2016",
            "imdbID":"tt3498820",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title":"World War Z",
            "Year":"2013",
            "imdbID":"tt0816711",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
            ,{
            "Title":"War of the Worlds",
            "Year":"2005",
            "imdbID":"tt0407304",
            "Type":"movie",
            "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
            }];
        
        
res.status(200).json({movies:mymovies})//Sends info above
})
app.post('/api/movies',(req,res)=>{
console.log('Movie Recived!');
console.log(req.body.Title);
console.log(req.body.Year);
console.log(req.body.Poster);
;})
app.listen(port, () => {//Sets up listen
  console.log(`Example app listening at http://localhost:${port}`)
})

