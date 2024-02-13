export default function cleanSet(set, initiate) {
  if (initiate === undefined || initiate.length === 0) {
    return '';
  }
  return [...set]
    .filter((key) => key !== undefined ? key.startsWith(initiate) : '')
    .map((key) => key !== undefined ? key.slice(initiate.length) : '')
    .join('-');
}
