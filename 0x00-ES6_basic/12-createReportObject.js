export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartment(employeessList) {
      return Object.keys(employeesList).length;
    },
  };
}
