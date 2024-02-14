const express = require('express')
const app = express()
const PORT = process.env.PORT || 3006;
const path = require('path')
const ejs = require('ejs')
const fs = require('fs').promises;

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'))
app.set('views engine', ejs);

app.get('/', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/index.ejs'))
})
app.get('/about', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/about.ejs'))

})
app.get('/projects', (req, res) => {
    let files=[]
    let routes = ['/static/img/u/projects/interior', '/static/img/u/projects/exterior', '/static/img/u/projects/art']
    Promise.all(routes.map(e =>fs.readdir(path.join(__dirname, e))))
        .then(file => {
        files.push(file)
            res.status(200).render(path.join(__dirname, '/views/projects.ejs'), { files })
        }).catch(error => { console.log(error); })
})

app.get('/team', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/team.ejs'))

})
app.get('/contact', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/contact.ejs'))

})
app.get('/articles', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/articles.ejs'))

})
app.get('*', (req, res) => {
    res.status(200).render(path.join(__dirname, '/views/404.ejs'))
})

app.listen(PORT, () => { console.log(PORT); })