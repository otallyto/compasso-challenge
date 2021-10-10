import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'client'
      }
    },
    {
      http: {
        method: 'get',
        path: 'client/{id}'
      }
    },
    {
      http: {
        method: 'post',
        path: 'client'
      }
    },
    {
      http: {
        method: 'put',
        path: 'client/{id}'
      }
    },
    {
      http: {
        method: 'delete',
        path: 'client/{id}'
      }
    }
  ]
}
