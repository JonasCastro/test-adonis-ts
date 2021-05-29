import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
  public async store({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()

    const user = await User.query().where('email', email).firstOrFail()

    if (!(await Hash.verify(user.password, password))) return response.badRequest('Inválido')

    return auth.use('api').generate(user)
  }
}
