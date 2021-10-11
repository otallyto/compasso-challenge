import { CityController } from '@controller/city-controller'
import { cityModel } from '@model/city-model'

export const cityFactory = (): CityController => {
  return new CityController(cityModel)
}
