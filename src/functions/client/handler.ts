import 'source-map-support/register'
import { middyfy } from '@libs/lambda'
import { clientFactory } from '@factory/client-factory'
import { HttpRequest } from 'src/protocols/httpMetods'

export interface HandlerResponse {
  statusCode: number
  body: string
}

const client = async (event: any): Promise<HandlerResponse> => {
  const client = clientFactory()
  let result = null
  const { httpMethod, body } = event
  const id = event.pathParameters ? event.pathParameters.id : null
  const nome = event.queryStringParameters ? event.queryStringParameters.nome : null

  try {
    switch (httpMethod) {
      case HttpRequest.GET:
        if (id) {
          result = await client.find(id)
        } else if (nome) {
          result = await client.findClientByName(nome)
        }
        break
      case HttpRequest.POST:
        result = await client.create(body)
        break
      case HttpRequest.PUT:
        result = await client.update(id, body)
        break
      case HttpRequest.DELETE:
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
