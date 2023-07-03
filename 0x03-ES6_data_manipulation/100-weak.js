// Weak map of ednpoints & number of calls made.
export const weakMap = new WeakMap();

// Max number of calls for endpoint.
const MAX_CALLS = 5;

// Notes number of calls made to API endpoint
// @param {{ protocol: String, name: String }}
// endpoint - Endpoint for request
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
