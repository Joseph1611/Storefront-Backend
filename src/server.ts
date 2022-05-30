import express from 'express'
import bodyParser from 'body-parser'
import route from './routes/server'

const app: express.Application = express()
const address: number= 7000

app.use(bodyParser.json())

app.use('/',route)  
  


app.listen(7000, function () {
    console.log(`starting app on: ${address}`)
})
export default app