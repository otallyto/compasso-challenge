import { Controller } from '../protocols/controller'
import { v4 } from 'uuid'
import { ClientModel } from '@model/client-model'
import { ModelType } from 'dynamoose/dist/General'
import { ScanResponse } from 'dynamoose/dist/DocumentRetriever'
import { Client } from 'src/protocols/client'
export class ClientController implements Controller {
  constructor (private readonly model: ModelType<ClientModel>) {
    this.model = model
  }

  async create (data: Client): Promise<ClientModel> {
    return await this.model.create({ id: v4(), ...data })
  }

  async find (id: string): Promise<ClientModel> {
    return await this.model.get(id)
  }

  async findClientByName (nome: string): Promise<ScanResponse<ClientModel>> {
    return await this.model.scan('nome').eq(nome).exec()
  }

  async update (id: string, data: Partial<Client>): Promise<ClientModel> {
    const client = await this.model.get(id)
    if (!client) {
      throw new Error('Client not found')
    }
    return await this.model.update(id, data)
  }

  async delete (id: string): Promise<void> {
    await this.model.delete(id)
  }
}
