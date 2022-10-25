const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())

const courses = require('../assignment-server/data/courses.json')
//test server
app.get('/', (req, res)=>{
    res.send('This is our new server')
})

//cousrse data 
app.get('/courses', (req, res)=>{
    res.send(courses)
})

//
app.get('/courses/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const singleCourse = courses.find(course=>course.id===id)
    res.send(singleCourse)
})

app.listen(port, ()=>{
    console.log('The server is running in :', port)
})