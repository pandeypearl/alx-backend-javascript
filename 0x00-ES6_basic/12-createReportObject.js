export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeessList) {
      return Object.keys(employeesList).length;
    },
  };
}
