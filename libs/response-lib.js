export function success(body = {}, statusCode = 200) {
  return buildResponse(body, statusCode);
}

export function failure(error = {}, statusCode) {
  error = typeof error == 'object' ? error : {message: error};
  statusCode = error.statusCode || statusCode || 500;
  const body = {message: 'Error accessing database.', ...error};
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