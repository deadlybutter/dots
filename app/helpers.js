export function getMachineName(str) {
  return str.toLowerCase().trim().replace(/ /g,"_");
}

export function convertObjectToArray(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

export function getProjectName(location) {
  const items = location.pathname.split('/');
  return items[2] || '';
}

export function getProjectPill(location) {
  const items = location.pathname.split('/');
  return items[3] || '';
}
