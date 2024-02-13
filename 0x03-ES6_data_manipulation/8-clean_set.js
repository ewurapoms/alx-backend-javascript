export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((element) => (key !== undefined ? key.startsWith(startString) : ''))
    .map((key) => (key !== undefined ? key.slice(startString.length) : ''))
    .join('-');
}
