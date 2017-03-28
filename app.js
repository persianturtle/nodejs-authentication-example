const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

const secret = 'N!D^xq8@8CfSywyN*3nXMBaCR9!wtM%sv$@zF86PHbYpkWMqQ_hp-ZAdyCbn'

app.use(cookieParser())

app.get('/auth/login', isAuthenticated(true), (req, res) => {
  res.sendFile('dist/login.html', {root: __dirname})
})

app.post('/auth/login', bodyParser.json(), (req, res) => {
  const {
    username,
    password
  } = req.body

  if (authenticate(username, password)) {
    const token = jwt.sign({
      data: {
        username: username,
        password: password
      }
    }, secret, { expiresIn: '1y' })
    res.cookie('jwt', token, { maxAge: 31536000000, httpOnly: true })
    res.send()
  } else {
    res.status(401).send('Not Authorized')
  }
})

app.use(isAuthenticated(false))
app.use(express.static('dist'))

app.listen(5000, () => {
  console.log('Listening on port 5000')
})

function isAuthenticated (isLogin) {
  return (req, res, next) => {
    if (req.url.includes('login.js')) return next()
    try {
      const object = jwt.verify(req.cookies.jwt, secret)
      if (authenticate(object.data.username, object.data.password)) {
        isLogin ? res.redirect('/') : next()
      } else {
        isLogin ? next() : res.redirect('/auth/login')
      }
    } catch (err) {
      isLogin ? next() : res.redirect('/auth/login')
    }
  }
}

function authenticate (username, password) {
  if (username === 'admin' &&
      password === 'test') {
    return true
  }

  return false
}
