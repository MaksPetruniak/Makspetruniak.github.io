// Масив об'єктів students
const students = [
    { name: "Олексій", age: 20, grade: 85, group: "A" },
    { name: "Марія", age: 22, grade: 90, group: "B" },
    { name: "Іван", age: 21, grade: 78, group: "A" },
    { name: "Олена", age: 23, grade: 88, group: "B" },
    { name: "Петро", age: 20, grade: 82, group: "A" },
    { name: "Анастасія", age: 22, grade: 95, group: "C" },
  ];
  
  // Функція для групування студентів за групами
  function groupBy(students, key) {
    return students.reduce((result, student) => {
      const groupKey = student[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(student);
      return result;
    }, {});
  }
  
  // Функція для сортування студентів за оцінками у порядку спадання
  function sortStudentsByGrade(students) {
    return [...students].sort((a, b) => b.grade - a.grade);
  }
  
  // Відображення студентів за групами
  function displayGroupedStudents() {
    const groupedStudents = groupBy(students, "group");
    const container = document.getElementById("grouped-students");
    container.innerHTML = Object.keys(groupedStudents)
      .map(group => {
        const groupStudents = groupedStudents[group]
          .map(student => `<li>${student.name} (Оцінка: ${student.grade}, Вік: ${student.age})</li>`)
          .join("");
        return `<h3>Група ${group}</h3><ul>${groupStudents}</ul>`;
      })
      .join("");
  }
  
  // Відображення відсортованих студентів
  function displaySortedStudents() {
    const sortedStudents = sortStudentsByGrade(students);
    const container = document.getElementById("sorted-students");
    container.innerHTML = `<ul>${sortedStudents
      .map(student => `<li>${student.name} (Оцінка: ${student.grade}, Група: ${student.group})</li>`)
      .join("")}</ul>`;
  }
  
  // Додаємо обробники подій до кнопок
  document.getElementById("group-button").addEventListener("click", displayGroupedStudents);
  document.getElementById("sort-button").addEventListener("click", displaySortedStudents);
  