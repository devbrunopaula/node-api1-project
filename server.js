import express from 'express'
import cors from 'cors'
import usersRoutes from './routes/api/users.js'

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routing
app.use('/api/users', usersRoutes)

// Port
const PORT = 5000

app.listen(PORT, () =>
  console.log(`Server Running on: http://localhost:${PORT}`)
)
