const express = require('express')
const aplicacao = express()
const porta = 3000

const configuracao = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const conexao = mysql.createConnection(configuracao)

conexao.connect()
conexao.query(`CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name VARCHAR(255), primary key(id))`)

aplicacao.get('/', (req, res) => {
    conexao.query(`INSERT INTO people(name) values('Italo')`)
    var conteudoDaPagina = '<h1>Full Cycle Rocks!</h1>'

    conexao.query(`SELECT * FROM people`, function(err, rows) {
        rows.forEach(function (registro) { 
            console.log(registro.name);
            conteudoDaPagina = conteudoDaPagina + ' ' + registro.name;
        });

        res.send(conteudoDaPagina);
    })

})

aplicacao.listen(porta, () => {
    console.log('Aplicação rodando na porta ' + porta);
})
