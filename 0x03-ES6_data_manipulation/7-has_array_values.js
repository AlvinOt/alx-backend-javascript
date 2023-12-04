export default function hasValuesFromArray(set, list) {
  return list.every(x => set.has(x));
}

