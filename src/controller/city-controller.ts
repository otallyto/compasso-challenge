import { Controller } from '../protocols/controller'
import { v4 } from 'uuid'
import { ModelType } from 'dynamoose/dist/General'
import { CityModel } from '@model/city-model'
import { ScanResponse } from 'dynamoose/dist/DocumentRetriever'
import { City } from 'src/protocols/city'
export class CityController implements Controller {
  constructor (private readonly model: ModelType<CityModel>) {
    this.model = model
  }

  async create (data: City): Promise<CityModel> {
    return await this.model.create({ id: v4(), ...data })
  }

  async find (id: string): Promise<CityModel> {
    return await this.model.get(id)
  }

  async findCityByName (nome: string): Promise<ScanResponse<CityModel>> {
    return await this.model.scan('nome').eq(nome).exec()
  }

  async findCityByState (estado: string): Promise<ScanResponse<CityModel>> {
    return await this.model.scan('estado').eq(estado).exec()
  }

  async update (id: string, data: Partial<City>): Promise<any> {
    const city = await this.model.get(id)
    if (!city) {
      throw new Error('City not found')
    }
    return await this.model.update(id, data)
  }

  async delete (id: string): Promise<void> {
    await this.model.delete(id)
  }
}
