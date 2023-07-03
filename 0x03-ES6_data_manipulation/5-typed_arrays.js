/**
 * Creates buffer array with given postion set to given value.
 * @param {Number}
 * length - Length of buffer.
 * @param {Number}
 * position - Position to modify.
 * @param {Number}
 * value - Value stored in position.
 * @return {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setInt8(position, value);
  return buffer;
}
