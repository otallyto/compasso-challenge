import dynamoose from 'dynamoose'

export const bootstrap = (): void => {
  dynamoose.aws.sdk.config.update({
    region: 'us-east-1'
  })
  dynamoose.aws.ddb.local()
}
