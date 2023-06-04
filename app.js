const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  const home = '首頁'
  res.render('index', {pageName: home})
})

app.get('/:page', (req, res) => {
  const title = `${req.params.page}`
  res.render('index', {pageName: title})
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})