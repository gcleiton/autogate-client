export type Administrator = {
  id: string
  name: string
  email: string
}

export type AdministratorFormInput = Omit<Administrator, 'id'>

export type AdministratorRequest = Omit<Administrator, 'id'> & {
  id?: string
}
