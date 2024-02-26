const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('./Pages/index')
})
app.get('/about', (req, res)=>{
    res.render('./Pages/about')
})
app.get('/courses', (req, res)=>{
    res.render('./Pages/courses')
})
app.get('/trainers', (req, res)=>{
    res.render('./Pages/trainers')
})
app.get('/events', (req, res)=>{
    res.render('./Pages/events')
})
app.get('/pricing', (req, res)=>{
    res.render('./Pages/pricing')
})
app.get('/contact', (req, res)=>{
    res.render('./Pages/contact')
})

app.listen(8000, ()=>{
    console.log('Server Start at Port - 8000');
})