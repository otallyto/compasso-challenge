import { handlerPath } from '@libs/handlerResolver'

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'city/{id}'
      }
    },
    {
      http: {
        method: 'post',
        path: 'city'
      }
    },
    {
      http: {
        method: 'put',
        path: 'city/{id}'
      }
    },
    {
      http: {
        method: 'delete',
        path: 'city/{id}'
      }
    }
  ]
}
