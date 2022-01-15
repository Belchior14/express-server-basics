// grabe express to our code base
const express = require('express')
// create an app with express
const app = express()

// make express be aware of the styles.css file
app.use(express.static('public'))

// make a root route
app.get('/', (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Hello world</h1>
    </body>
  </html>
  `)
})

// make a home route
app.get('/home', (request, response) => {
  response.send('<h1>hello world</h1>')
})

// start listening to request
app.listen(5001, () => {
  console.log('server started')
})
