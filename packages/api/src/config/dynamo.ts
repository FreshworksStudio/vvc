import { DynamoDB } from 'aws-sdk';
import { DataMapper } from '@aws/dynamodb-data-mapper';

const dynamoDBOptions: DynamoDB.ClientConfiguration = {
  region: process.env.AWS_REGION || 'ca-central-1',
};

if (process.env.AWS_ACCESS_KEY_ID) {
  dynamoDBOptions.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
  }
}

dynamoDBOptions.endpoint = process.env.DB_ENDPOINT;
dynamoDBOptions.sslEnabled = false;

export const DynamoClient = new DynamoDB(dynamoDBOptions);
export const DynamoMapper = new DataMapper({ client: DynamoClient });