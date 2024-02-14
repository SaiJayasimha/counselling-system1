const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello World University</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>This is About page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>This is contact page</h1>')
})

app.post('/home',(req,res)=>{
    res.send('<h1>This is home page</h1>')
})

app.listen(8080, ()=>{console.log('Express server is running')})