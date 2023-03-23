const path = require('path')
const morgan = require('morgan')
const express = require('express')
const { engine } = require('express-handlebars')
const route = require('./routes')
const app = express()
const port = 4000

app.use(express.static(path.join(__dirname, 'public')))

app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'))

route(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})