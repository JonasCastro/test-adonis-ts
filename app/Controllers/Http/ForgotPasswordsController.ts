import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { DateTime } from 'luxon'
import crypto from 'crypto'

export default class ForgotPasswordsController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = DateTime.now()

      await user.save()
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Erro ao recuperar senha, confirme o e-mail' } })
    }
  }
}
