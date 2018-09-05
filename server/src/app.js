const express = require('express')
const bodyParser = require('body-parser')
const cors  = require('cors')
const morgan = require('morgan')
const path = require('path')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

/**************************************************/
// middleware
/**************************************************/
app.use(morgan('combined'))
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '/public')));

/**************************************************/
// routing
/**************************************************/
require('./routes/routes')(app, sequelize)

/**************************************************/
// connects to the database then starts the server
/**************************************************/
sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(config.status(config.port))
    })
