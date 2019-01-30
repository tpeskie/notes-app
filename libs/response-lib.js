export function success(body = {}, statusCode = 200) {
  return buildResponse(body, statusCode);
}

export function failure(error = {}, statusCode = 500) {
  error = typeof error == 'object' ? error : {message: error}
  const body = {status: 'Error accessing database.', ...error};
  return buildResponse(body, statusCode);
}

function buildResponse(body, statusCode) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}