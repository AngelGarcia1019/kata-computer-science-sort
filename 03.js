// 3.- Crear una clase Alumno con los siguientes datos:
// Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
// Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.

class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades ?? [];
  }

  calculateAverage = () =>
    this.grades.reduce((sum, grade) => (sum += grade), 0) / this.grades.length;

  toString = () =>
    this.name + " | " + this.grades + " -> " + this.calculateAverage();
}

class ClassRoom {
  constructor(students) {
    this.students = students ?? [];
  }

  sortByAverage = () =>
    [...this.students].sort(
      (a, b) => b.calculateAverage() - a.calculateAverage()
    );

  printStudents = () => this.print(this.students);

  print = (students = []) =>
    students.forEach((student) => console.log(student.toString()));
}

const student1 = new Student("Lisbon", [10, 10, 10, 10, 10]);
const student3 = new Student("Sofia", [8, 8, 8, 8, 8]);
const student2 = new Student("Brenan", [9, 9, 9, 9, 9]);
const student4 = new Student("Denisse", [10, 10, 10, 10, 9]);

const classRoom1 = new ClassRoom([student1, student2, student3, student4]);

classRoom1.printStudents();
console.log("Ordenados:");
classRoom1.print(classRoom1.sortByAverage());
