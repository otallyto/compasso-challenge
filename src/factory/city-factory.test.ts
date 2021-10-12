import { CityController } from '@controller/city-controller'
import { cityFactory } from './city-factory'

describe('City Factory', () => {
  it('Deve retornar uma instancia de CityController', () => {
    expect(cityFactory()).toBeInstanceOf(CityController)
  })
})
