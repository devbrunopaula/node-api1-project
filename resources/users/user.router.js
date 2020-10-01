import express from 'express'

const router = express.Router()

// Controler Method Imports

// import * as controller from './user.controllers.js'
import * as controller from './user.controllers.js'

// EndPPoints
// | Method | URL            | Description                                                                                            |
// | ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
// | POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
// | GET    | /api/users     | Returns an array users.                                                                                |
// | GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
// | DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
// | PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |
// | PATCH    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user properties only |

router.route('/').get(controller.getUsers).post(controller.createUser)

router
  .route('/:id')
  .get(controller.getUserById)
  .delete(controller.deleteUser)
  .put(controller.updatedUser)
  .patch(controller.upadateUserProperties)

export default router
