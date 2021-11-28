const express = require('express')
const sql = require('mysql2')
const server = express()
const bodyParser = require('body-parser')
const banco = sql.createPool({
    database: '2e_gb_210922',
    user: 'root',
    password: '',
    host: 'localhost',
    port: '3306'
})

const cors = require('cors')
const corsOptions = {
	origin: 'http://localhost:4200',
	optionSuccessStatus: 200,
}
server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

////////////////////////////////Rotas////////////////////////////////

server.get('/', (req, res) => {
    return res.status(200).send({
        message: 'Bem vindo ao servidor!',
        cidade: 'Itapeva',
        uf: 'SP'
    })
})

server.get('/veiculos', (req, res) => {
    const QUERY = 'SELECT * FROM veiculos'
    banco.getConnection((error, conn) => {
        if(error) {
            return res.status(500).send({ detalhes: error })
        }
        conn.query(QUERY, (erro, resultados) => {
            conn.release()
            if(error) {
                return res.status(500).send({ detalhes: error })
            }
            return res.status(200).send({ data: resultados })
        })
    })
})

// Exercício 1
server.post('/veiculos', (req, res) => {
    let body = req.body
    const query = `insert into veiculos (modelo, marca, preco_venda, proprietario) values('${body.modelo}', '${body.marca}', ${body.preco_venda},
    '${body.proprietario}')`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({detalhes: error})

        conn.query(query, error => {
            conn.release()

            if(error) return res.status(501).send({detalhes: error})

            return res.status(201).send({mensagem: 'Veiculo cadastrado com sucesso!'})
        })
    })
})

// Exercício 2
server.get('/veiculos/orderMarca', (req, res) => {
    const query = `SELECT * FROM veiculos order by marca`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ detalhes: error })
        conn.query(query, (error, result) => {
            conn.release()

            if(error) return res.status(500).send({ detalhes: error })
            return res.status(200).send({ data: result})
        })
    })
})

// Exercício 3
server.get('/veiculos/marca/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const query = `SELECT * FROM veiculos WHERE marca LIKE '%${criterio}%'`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ detalhes: error })

        conn.query(query, (error, result) => {
            conn.release()

            if(error) return res.status(500).send({ detalhes: error })
            return res.status(200).send({ data: result })
        })
    })
})

// Exercício 4
server.get('/veiculos/proprietario/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const query = `SELECT * FROM veiculos where proprietario like '${criterio}%'`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ detalhes: error})

        conn.query(query, (error, result) => {
            conn.release();

            if(error) return res.status(500).send({ detalhes: error })
            return res.status(200).send({ data: result })
        })
    })
})

// Exercício 5
server.get('/veiculos/preco/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const query = `SELECT * FROM veiculos WHERE preco_venda >= ${criterio}`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ erro: error })

        conn.query(query, (error, result) => {
            conn.release()

            if(error) return res.status(500).send({ erro: error })
            return res.status(200).send({ data: result })
        })
    })
})

// Exercício 6
server.patch('/veiculos/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const body = req.body
    const query = `update veiculos set modelo = '${body.modelo}', marca = '${body.marca}', preco_venda = ${body.preco_venda},
    proprietario = '${body.proprietario}' where id = ${criterio}`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({detalhes: error})

        conn.query(query, error => {
            conn.release()

            if(error) return res.status(501).send({detalhes: error})
            return res.status(200).send({mensagem: 'Veiculo alterado com sucesso!'})
        })
    })
})

// Exercício 7
server.delete('/veiculos/id/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const query = `DELETE FROM veiculos WHERE id=${criterio}`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ erro: error })

        conn.query(query, (error) => {
            conn.release()

            if(error) return res.status(500).send({ erro: error })
            return res.status(200).send({
                message: 'Veículo removido com sucesso!'
            })
        })
    })
})

// Exercício 8
server.delete('/veiculos/marca/:criterio', (req, res) => {
    const criterio = req.params.criterio
    const query = `DELETE FROM veiculos WHERE marca='${criterio}'`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ erro: error })

        conn.query(query, (error) => {
            conn.release()

            if(error) return res.status(500).send({ erro: error })
            return res.status(200).send({
                message: 'Marca removida com sucesso!'
            })
        })
    })
})

// Exercício 9
server.delete('/veiculos/modelo/:modelo/preco/:preco', (req, res) => {
    const modelo = req.params.modelo
    const preco = req.params.preco
    query = `DELETE FROM veiculos WHERE modelo='${modelo}' and preco_venda='${preco}'`

    banco.getConnection((error, conn) => {
        if(error) return res.status(500).send({ erro: error })

        conn.query(query, error => {
            conn.release()

            if(error) return res.status(500).send({ erro: error })
            return res.status(200).send({
                message: 'Dado removido com sucesso!'
            })
        })
    })
})

server.listen(3000, () => { console.log('Server running...') })
