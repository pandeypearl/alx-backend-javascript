/**
 * Updates grades of students in specific city.
 * @param {{ id: Number, firstName, location: String }[]}
 * students - List of students.
 * @param {*}
 * city - Specific city.
 * @param {{ studentId: Numer, grade: Number }[]}
 * newGrades = New grade for student.
 * return {{ id: Number, firstName: String, location: String }[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const oldGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || oldGrade).grade,
      }));
  }
  return [];
}
