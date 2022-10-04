export class UnexpectedError extends Error {
  constructor() {
    super(
      'Algo de errado aconteceu. Por favor, tente novamente. Se o problema persistir, contate o administrador do sistema.'
    )
  }
}