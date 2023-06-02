export const convertResponse = (source: any) => {
  const config = source.config || {};

  // the request
  const request = {
    url: `${config.baseURL}${config.url}`,
    method: config.method,
    data: config.data || null,
    headers: config.headers,
    params: config.params || null,
  };

  // the response
  source.duration =
    Number(source.config?.metadata?.endTime) -
    Number(source?.config?.metadata?.startTime);
  const responseHeaders = source.headers || {};
  const useRealBody =
    typeof source.data === "string" || typeof source.data === "object";
  const body = useRealBody ? source.data : "~~~ skipped ~~~";
  const response = {
    body,
    status: source.status,
    headers: responseHeaders,
  };

  // return all 3
  return [request, response, source.duration];
};
