export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }

  return [...set]
    .filter((str) => str?.startsWith(string))
    .map((str) => str?.slice(string.length))
    .join('-');
}
