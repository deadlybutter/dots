export function convertObjectToArray(obj) {
  return Object.keys(obj).map(key => obj[key]);
}
