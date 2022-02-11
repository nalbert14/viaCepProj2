const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
//Conexão combanco de dados
const connection = require('./mysqlFile')
const db = require('mysql').createPool(connection)

//Validações
const validate = require('./validation')
app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', (req, res) =>{
  res.status(200).render('home')
})


app.listen(3000, () => {
  console.log('Back end executando e exercicio finalizado.....')
})