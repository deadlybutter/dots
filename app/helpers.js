export function getMachineName(str) {
  return str.toLowerCase().trim().replace(/ /g,"_");
}

export function convertObjectToArray(obj) {
  return Object.keys(obj).map(key => obj[key]);
}
