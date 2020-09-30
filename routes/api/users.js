import express from 'express'

const router = express.Router()

// Controler Method Imports

import * as controller from '../../controllers/users.js'

let users = []

// EndPPoints
// | Method | URL            | Description                                                                                            |
// | ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
// | GET    | /api/users     | Returns an array users.                                                                                |
// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
// | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |
// | PATCH    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user properties only |

// GET -- api/users
// Returns an array users
router.get('/', controller.getUsers)

// POST -- /api/users
// Creates a user using the information sent inside the `request body`.
router.post('/', controller.createUser)

// GET -- /api/users/:id
// Returns the user object with the specified `id`.
router.get('/:id', controller.getUserById)

// Delete -- /api/users/:id
// Removes the user with the specified `id` and returns the deleted user.
router.delete('/:id', controller.deleteUser)

// PUT -- /api/users/:id
// Updates the user with the specified `id` using data from the `request body`. Returns the modified user
router.put('/:id', controller.updatedUser)

// PATch -- /api/users/:id
// Updates the user with the specified `id` using data from the `request body`. Returns the modified user properties only
router.patch('/:id', controller.upadateUserProperties)

export default router
