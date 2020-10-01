import express from 'express'
import cors from 'cors'
import usersRoutes from './resources/users/user.router.js'
import morgan from 'morgan'
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// Routing
app.use('/api/users', usersRoutes)

// Port
const PORT = 5000

app.listen(PORT, () =>
  console.log(`Server Running on: http://localhost:${PORT}`)
)
