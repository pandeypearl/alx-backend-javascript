/**
 * Finds the ids froma  list of students
 * @param {{ id: Number, firstName: String, location: String}[]}
 * - students - List of students.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
