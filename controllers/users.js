import express from 'express'
import {v4 as uuidv4} from 'uuid'
const router = express.Router()

// User Controller

let users = []

// Get All Users
export const getUsers = (req, res) => {
  if (users.length === 0) return res.json({count: 0, users: 'No Users'})
  res.status(200).json({
    count: users.length,
    users,
  })
}

// Create a Users
export const createUser = (req, res) => {
  if (!req.body.name || !req.body.bio) {
    res.status(400).json({error: 'User values are required'})
  }

  const userReq = req.body
  const id = uuidv4()
  const user = {id, ...userReq, createdAt: new Date()}
  users.push(user)
  res.status(201).json({user: user})
}

// Create a Single User By Id
export const getUserById = (req, res) => {
  const {id} = req.params
  const foundUser = users.find((user) => user.id === id)
  if (!foundUser) {
    res.status(400).json({error: 'User Id is not valid'})
  }

  res.status(200).json({user: foundUser})
}

// Delete a Single User By Id
export const deleteUser = (req, res) => {
  const {id} = req.params
  const foundUser = users.find((user) => user.id === id)
  if (!foundUser) {
    res.status(400).json({error: 'User Id is not valid'})
  }

  users = users.filter((user) => user.id !== id)
  res.status(200).send({message: `User width ID ${id} has been deleted`})
}

// Update a Single User property By Id
export const upadateUserProperties = (req, res) => {
  const {id} = req.params
  const {name, bio} = req.body
  const foundUser = users.find((user) => user.id === id)
  if (!foundUser) {
    res.status(400).json({error: 'User Id is not valid'})
  }
  let user = users.find((user) => user.id === id)
  user.updatedAt = new Date()
  if (name) user.name = name
  if (bio) user.bio = bio

  res
    .status(200)
    .send({message: `User Property width ID ${id} has been deleted`, user})
}

// Update a User  By Id
export const updatedUser = (req, res) => {
  const {id} = req.params
  const userReq = req.body
  const foundUser = users.find((user) => user.id === id)
  if (!foundUser) {
    res.status(400).json({error: 'User Id is not valid'})
  }
  users = users.filter((user) => user.id !== id)
  res.status(200).send({message: `User width ID ${id} has been updated`})
}
