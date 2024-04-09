const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const mySql = require('mysql')
    const conexao = mySql.createConnection(config)

    const sqlDeInsercao = `INSERT INTO people(name) values('Italo')`
    conexao.query(sqlDeInsercao)
    conexao.end()

    res.send('<h1>Full Cycle Rocks!</h1>')
})

app.listen(port, () => {
    console.log('Aplicação rodando na porta ' + port);
})
