import express from 'express'
const app = express()

const PORT = process.env.PORT || 8800

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'You are welcome to CleanHub API' })
})

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`)
})
