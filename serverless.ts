import type { AWS } from '@serverless/typescript'
import { resources } from './src/resources'
import city from '@functions/city'
import client from '@functions/client'

const serverlessConfiguration: AWS = {
  service: 'compasso-challenge',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    },
    region: '${ self:provider.region}',
    stage: '${ self:provider.stage}',
    cityTable: '${self:service}-city-${self:provider.stage}',
    clientTable: '${self:service}-client-${self:provider.stage}'
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      CITY_TABLE: '${self:custom.cityTable}',
      CLIENT_TABLE: '${self:custom.clientTable}'
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [{
      Effect: 'Allow',
      Action: [
        'dynamodb:GetItem',
        'dynamodb:PutItem',
        'dynamodb:UpdateItem',
        'dynamodb:DescribeTable',
        'dynamodb:DeleteItem'
      ],
      Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/*'
    }]
  },
  functions: { city, client },
  resources: {
    Resources: resources
  }
}

module.exports = serverlessConfiguration
