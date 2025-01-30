const express = require ('express')
const app = express()
const port = 3000

app.use(express.static('Public'))
app.get('/' , (req,res) => {
    res.sendFile('./public/Home.html' , {root: __dirname})
})

app.listen(port , () => {
    console.log(`http://localhost:${port}`)
})