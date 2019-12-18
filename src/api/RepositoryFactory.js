import AuthenticationRepository from './authenticationRepository'

const repositories = {
  authentication: AuthenticationRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name]
}