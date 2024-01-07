import express from 'express'
import cors from 'cors'
const app = express()
const jsonMiddleware = express.json()
app.use(cors())
app.use(jsonMiddleware)
const port = process.env.PORT || 3000
let count = 0
app.get('/', (req, res) => {
    res.send('Hello World!' + count)
})
app.get('/count/:id', (req, res) => {
    res.send('this page count: ' + req.params.id)
})
app.get('/count', (req, res) => {
    res.send('this page count, and count now: ' + count)
})

app.post('/count', (req, res) => {
    count = req.body.count
    res.send('this page count, count update to: ' + count)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
