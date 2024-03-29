import express from 'express'
import cors from 'cors'

// interface IDB {
//     id: number
//     count: number
// }


const app = express()
const jsonMiddleware = express.json()
app.use(cors())
app.use(jsonMiddleware)
const port = process.env.PORT || 3000
// const arrayCounts: IDB[] = JSON.parse(fs.readFileSync('./db.json').toString())
app.get('/', (request, response) => {
    /*const html = `<ul>
   ${arrayCounts.map(item => `<li>   ${item.count}</li>`).join('')}
   </ul>
`*/
    const html = `
    <h1>Привет</h1>
    <ul>
    <li>Проверка связи...</li>
    <li>Связь установлена, можете делать свой запрос))</li>
</ul>
    `
    response.send(html)
})
app.post('/', async (request, response) => {

    // console.log(await JSON.parse(request.body))
    const obj:{login:string, email:string} = request.body
    const login = obj.login
    const email = obj.email
    const html = `
    <ul>
        <li>Есть связь</li>
        <li>Вы прислали логин: <strong>${login}</strong></li>
        <li>Вы прислали email: <strong>${email}</strong></li>
    </ul>
    `
    response.send(html)
})
app.get('/count/:id', (request, response) => {
    response.send('this page id: ' + request.params.id)
})
// app.get('/count', (request, response) => {
//     response.send('this page count, and count now: ' + arrayCounts.at(-1)?.count + '')
// })

// app.post('/count', (request, response) => {
//     if (typeof request.body.count !== 'number') {
//         response.status(422)
//         return
//     }
//     const obj = {
//         id: Date.now(),
//         count: request.body.count
//     }
//     arrayCounts.push(obj)
//     response.send('this page count, count update to: ' + arrayCounts.at(-1)?.count + '')
// })

// app.delete('/count', (request, response) => {
//     if (typeof request.body.count !== 'number') {
//         response.status(422)
//         return
//     }
//     const newArr = arrayCounts.filter(item => item.count !== request.body.count)
//     fs.writeFileSync('./db.json', JSON.stringify(newArr))
//     response.send(`all counts ${request.body.count} was delete`)
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
