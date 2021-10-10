import { ClientController } from '@controller/client-controller'
import { client } from '@model/client-model'

export const clientFactory = (): ClientController => {
  return new ClientController(client)
}
