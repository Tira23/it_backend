import express from 'express'
import cors from 'cors'
const app = express()
const jsonMiddleware = express.json()
app.use(cors())
app.use(jsonMiddleware)
const port = process.env.PORT || 3000
let count = [42]
app.get('/', (req, res) => {
    const html = `<ul>
   ${count.map(item => `<li>   ${item}</li>`).join('')}
   </ul>
`
    res.send(html)
})
app.get('/count/:id', (req, res) => {
    res.send('this page id: ' + req.params.id)
})
app.get('/count', (req, res) => {
    res.send('this page count, and count now: ' + count.at(-1))
})

app.post('/count', (req, res) => {
    count.push(req.body.count)
    res.send('this page count, count update to: ' + count.at(-1))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
