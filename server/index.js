const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/download', (req, res) => {
  var file = __dirname + '/data/hello.txt';
  res.download(file); // Set disposition and send it.
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
