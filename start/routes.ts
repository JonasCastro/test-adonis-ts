import Route from '@ioc:Adonis/Core/Route'

Route.post('users', 'UsersController.create')
Route.post('sessions', 'SessionsController.store')
Route.post('passwords', 'ForgotPasswordsController.store')
