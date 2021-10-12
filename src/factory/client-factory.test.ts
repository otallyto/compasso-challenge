import { ClientController } from '@controller/client-controller'
import { clientFactory } from './client-factory'

describe('Client Factory', () => {
  it('Deve retornar uma instancia de ClientController', () => {
    expect(clientFactory()).toBeInstanceOf(ClientController)
  })
})
