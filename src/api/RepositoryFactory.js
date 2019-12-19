import AuthenticationRepository from './authenticationRepository'
import UsersRepository from './usersRepository'

const repositories = {
  authentication: AuthenticationRepository,
  users: UsersRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}