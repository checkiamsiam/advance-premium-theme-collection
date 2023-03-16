import { Amplify, API } from "aws-amplify";

export const get = (path, queryParam) => {
  const apiName = "api3ceaf69c"; //keep this same everywhere
  const myInit = {
    // OPTIONAL
    headers: {}, // OPTIONAL
    queryStringParameters: queryParam,
  };
  // follow this link to see more examples on GET/POST/DELETE etc
  //https://docs.amplify.aws/lib/restapi/fetch/q/platform/js/#get-requests
  return API.get(apiName, path, myInit);
};

export const postData = async (path, body) => {
  const apiName = "api3ceaf69c"; //keep this same everywhere
  const myInit = {
    // OPTIONAL
    body: body,
    headers: {}, // OPTIONAL
  };
  // follow this link to see more examples on GET/POST/DELETE etc
  //https://docs.amplify.aws/lib/restapi/fetch/q/platform/js/#get-requests
  return await API.post(apiName, path, myInit);
};
