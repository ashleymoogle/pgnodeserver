import express from 'express'
import router from './routes/router'

const app = express()

const port = process.env.port || 8080

app.use('/api', router)

app.listen(port)

console.log('Magic happens on port ' + port);