const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('Wesley')`
    connection.query(sql)
    connection.query("SELECT name FROM people ", function (err, result, fields) {
        if (err) throw err;
        res.send(`<h1>Full Cycle</h1>${result.map( i => '<h2>'+i.name+'</h2>').join("")}`)
    });
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})