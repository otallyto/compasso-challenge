import 'source-map-support/register'
import { middyfy } from '@libs/lambda'
import { clientFactory } from '@factory/client-factory'

export interface HandlerResponse {
  statusCode: number
  body: string
}

const client = async (event: any): Promise<HandlerResponse> => {
  const client = clientFactory()
  let result = null
  const { httpMethod, body } = event
  const id = event.pathParameters ? event.pathParameters.id : null

  try {
    switch (httpMethod) {
      case 'GET':
        result = await client.find(id)
        break
      case 'POST':
        result = await client.create(body)
        break
      case 'PUT':
        result = await client.update(id, body)
        break
      case 'DELETE':
        result = await client.delete(id)
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

export const main = middyfy(client)
