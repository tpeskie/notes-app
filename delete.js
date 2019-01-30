import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
  const params = {
    TableName: "notes",
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  try {
    throw new Error('forced');
    await dynamoDbLib.call("delete", params);
    return success({status: 'Note deleted.'});
  } 
  catch(error) {return failure(error, 1000)}
}