import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.send('its working!')
})


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
