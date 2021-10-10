export const client = {
  Type: 'AWS::DynamoDB::Table',
  DeletionPolicy: 'Retain',
  Properties: {
    TableName: '${self:provider.environment.CLIENT_TABLE}',
    AttributeDefinitions: [
      { AttributeName: 'id', AttributeType: 'S' }
    ],
    KeySchema: [
      { AttributeName: 'id', KeyType: 'HASH' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: '1',
      WriteCapacityUnits: '1'
    }
  }
}
