import express from 'express'
import cors from 'cors'

const app = express()
const jsonMiddleware = express.json()
app.use(cors())
app.use(jsonMiddleware)
const port = process.env.PORT || 3000
let arrayCounts = [{
    id: 1,
    count: 42
} as {id: number, count: number}]
app.get('/', (request, response) => {
    const html = `<ul>
   ${arrayCounts.map(item => `<li>   ${item.count}</li>`).join('')}
   </ul>
`
    response.send(html)
})
app.get('/count/:id', (request, response) => {
    response.send('this page id: ' + request.params.id)
})
app.get('/count', (request, response) => {
    response.send('this page count, and count now: ' + arrayCounts.at(-1)?.count)
})

app.post('/count', (request, response) => {
    if (typeof request.body.count !== 'number') {
        response.status(422)
        return
    }
    const obj = {
        id: Date.now(),
        count: request.body.count
    }
    arrayCounts.push(obj)
    response.send('this page count, count update to: ' + arrayCounts.at(-1)?.count)
})

app.delete('/count', (request, response ) =>{
    if (typeof request.body.count !== 'number') {
        response.status(422)
        return
    }
    arrayCounts = arrayCounts.filter(item => item.count !== request.body.count)
    response.send(`all counts ${request.body.count} was delete`)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
