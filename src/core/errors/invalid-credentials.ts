export class InvalidCredentialsError extends Error {
  constructor() {
    super('Seu usuário ou senha estão incorretos.')
  }
}
