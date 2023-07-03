/**
 * Finds students in specific location
 * @param {{ id: Number, firstName: String, location: String }[]}
 * students - List of students.
 * @param {String}
 * city - Specific location.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
