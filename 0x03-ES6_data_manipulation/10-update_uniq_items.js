/**
 * Updated map for Grocery items.
 * @param {Map<String, Number>}
 * map - map of grocery items.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((item, key) => {
    if (item === 1) {
      map.set(key, 100);
    }
  });
}
