const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const port = 5001;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "students",
    password: "",
})

app.get('/students', (req,res) =>{
    const sql = "SELECT * FROM student_details";
    db.query(sql, (err, result) =>{
        if(err) res.json({message: "Server eror"})
        return res.json(result);
    });
});


app.listen(port, () =>{
    console.log("app listening on port=", port);
})