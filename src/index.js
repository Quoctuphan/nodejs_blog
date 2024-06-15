const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended: true})) //xử lý dữ liệu từ form về server
app.use(express.json()) 
//XMLHttpRequest, fetch, axios, ajax
//HTTP LOGER
app.use(morgan('combined'))
//Template Engine
app.engine('hbs', exphbs.engine({extname:'.hbs'}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))


const route = require('./routes')
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})