import { CityController } from '@controller/city-controller'
import { city } from '@model/city-model'

export const cityFactory = (): CityController => {
  return new CityController(city)
}
