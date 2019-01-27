export function success(body) {
  return buildResponse(200, body);
}

export function failure(error) {
  return buildResponse(500, {status: false, ...error});
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}