import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const data = request.only(['email', 'username', 'password'])

    return await User.create(data)
  }
}
