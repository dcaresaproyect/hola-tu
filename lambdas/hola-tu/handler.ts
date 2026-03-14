import { DynamoDB } from 'aws-sdk';

const dynamo = new DynamoDB.DocumentClient();

export const handler = async (event: any) => {
  const tableName = process.env.TABLE_NAME!;

  const result = await dynamo.scan({ TableName: tableName }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hola Mundo! 🚀',
      items: result.Items ?? [],
    }),
  };
};