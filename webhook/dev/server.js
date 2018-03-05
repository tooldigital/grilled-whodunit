#!/usr/bin/env node

const port = process.env.PORT || 3333
const hook = require('../index').http
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => {res.send('Hello World!')})
app.post('/', (req, res) => {
    if(!req.body) req.body = {}
    hook(req, res)
})
app.listen(port, () => console.log(`listening on port ${port}`))