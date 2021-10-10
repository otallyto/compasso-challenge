import { Model } from 'dynamoose/dist/Model'
import { Controller } from '../protocols/controller'
import { v4 } from 'uuid'
export class CityController implements Controller {
  constructor (private readonly model: Model) {
    this.model = model
  }

  async create (data: any): Promise<any> {
    return await this.model.create({ id: v4(), ...data })
  }

  async find (id: string): Promise<any> {
    return await this.model.get(id)
  }

  async getCityByName (nome: string): Promise<any> {
    return await this.model.scan('nome').eq(nome).exec()
  }

  async getCityByState (estado: string): Promise<any> {
    return await this.model.scan('estado').eq(estado).exec()
  }

  async update (id: string, data: any): Promise<any> {
    const funcionario = await this.model.get(id)
    return await funcionario.model.update({ id: funcionario.id, ...data })
  }

  async delete (id: string): Promise<any> {
    await this.model.delete(id)
  }
}
