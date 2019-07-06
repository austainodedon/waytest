import express from 'express'
import debug from 'debug'

const logger = new debug(`dev`)


const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello API")
})

app.listen(port, () =>console.log(`server running on port  ${port}`))
