const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const usersRoute = require('./api/routes/users')

app.use(express.json())
app.use(express.static('public'))
app.use('/users', usersRoute)

// app.set('view engine', 'ejs')

app.listen(port, () => console.log(`Server started on port ${port}`))

