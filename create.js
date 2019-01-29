import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main({body, requestContext}, context) {
  const data = JSON.parse(body);
  const params = {
    TableName: "notes",
    
    Item: {
      userId: requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    return success({status: 'Note created.', ...params.Item}, 201);
  } 
  catch (error) {return failure(error)}
}