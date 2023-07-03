/**
 * Returns a string of all the set values that start with a specific string.
 * @param {Set<String>}
 * set - Collection of strings.
 * @param {String}
 * startString - String to strip from beginning of each item in set.
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const sections = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStrVal = value.substring(startString.length);

      if (subStrVal && subStrVal !== value) {
        sections.push(subStrVal);
      }
    }
  }
  return sections.join('-');
}
