const connectToMongo=require('./db')
const express = require('express')
const app = express()

const port = 3000
connectToMongo();
app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/note',require('./routes/note.js'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})