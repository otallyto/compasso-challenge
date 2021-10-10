import 'source-map-support/register'
import { middyfy } from '@libs/lambda'
import { cityFactory } from '@factory/city-factory'

export interface HandlerResponse {
  statusCode: number
  body: string
}

const city = async (event: any): Promise<HandlerResponse> => {
  const city = cityFactory()
  let result = null
  const { httpMethod, body } = event
  const id = event.pathParameters ? event.pathParameters.id : null

  try {
    switch (httpMethod) {
      case 'GET':
        result = await city.find(id)
        break
      case 'POST':
        result = await city.create(body)
        break
      case 'PUT':
        result = await city.update(id, body)
        break
      case 'DELETE':
        result = await city.delete(id)
        break
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ result })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
}

export const main = middyfy(city)
