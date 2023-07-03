/**
 * Gets the sum of ids froma list of students
 * @param {{ id: Number, firstName: String, location: String }[]}
 * students - List of students
 * @return {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (preStudent, currStudent) => preStudent.id || preStudent + currStudent.id, 0,
    );
  }
  return 0;
}
