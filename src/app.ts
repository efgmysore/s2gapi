const express = require('express')
const bodyparser = require("body-parser");
const app = express()
const port = 3000

// MySQL Database connection parameters - ConnectionString
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 's2g',
    password: 's2g1234',
    database: 's2g'
});

connection.connect();





app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


app.get('/getUserDetails', (req, res) => {
    console.log(req.query)
    res.send('Hello World!')
})

// Param Names: fname, lname, uname, password
app.post('/saveVolunteer', (req, res) => {

    
    var uname = req.body["uname"]
    var fname = req.body["fname"]
    var lname = req.body["lname"]
    var password = req.body["password"]
    var usertypeid=3

    console.log("Firstname" + req.body["fname"])
    console.log("Lastname" + req.body["lname"])
    console.log("Username" + req.body["uname"])
    console.log("Password" + req.body["password"])

    var qry = `insert into user(username,password,firstname,lastname,usertypeid) values('${uname}','${password}','${fname}','${lname}',${usertypeid})`
    

    connection.query(qry, function (error, results, fields) {
        if (error) 
        {
            res.send("Error in insertion!")
        }
        else
        {
            res.send("Successful...")
        }
        
    });

})
