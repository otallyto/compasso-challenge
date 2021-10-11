import dynamoose from 'dynamoose'

export const bootstrap = (): void => {
  if (process.env.STAGE === 'local') {
    dynamoose.aws.sdk.config.update({
      region: 'us-east-1'
    })
    dynamoose.aws.ddb.local()
  }
}
