const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const { PORT, host } = require('./config.js')
const modules = require('./modules')


app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.use( express.static(path.join(__dirname, 'public')) )

app.use(modules)
 
app.listen(PORT, () => console.log('Server is running on http://' + host + ':' + PORT))