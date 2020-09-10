const fs = require('fs')
let users = JSON.parse(fs.readFileSync(`db/users.json`)) || []

exports.getUsers = (req, res) => {
  res.send(users)
}

exports.createUser = (req, res) => {
  const { email, password } = req.body
  let user = {
    id: Date.now(),
    email,
    password
  }
  users.unshift(user)
  fs.writeFileSync(`db/users.json`, JSON.stringify(users, null, 2))
  res.status(201).json({ message: 'user is successfully created !' })
}

exports.verifyUser = (req, res) => {
  const { email, password } = req.body
  const authUser = users.find(user => user.email === email && user.password === password)
  if (authUser) {
    res.status(201).json({
      auth: true,
      message: `user is verified !`
    })
  } else {
    res.status(201).json({
      auth: false,
      message: `cannot find the user !`
    })
  }
}
