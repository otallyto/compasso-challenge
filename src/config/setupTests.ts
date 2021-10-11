import dynamoose from 'dynamoose'

dynamoose.aws.sdk.config.update({
  region: 'us-east-1'
})
dynamoose.aws.ddb.local()

process.env.CITY_TABLE = 'city-test'
process.env.CLIENT_TABLE = 'city-test'
process.env.IS_LOCAL = 'true'
