const students = getPopulatedListOfStudents();
var master = $('<div>').attr('id', 'master');

function main() {
  baseHtml();
  makeListOfStudents(students);
  clickEvents();
}
main();
