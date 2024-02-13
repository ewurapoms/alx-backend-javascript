export default function getStudentIdsSum(studentlist) {
  return studentList.reduce((sumUp, { id }) => sumUp + id, 0);
}
