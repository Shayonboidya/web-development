interface StudentInfo {
  name: string;
  marks: number[];
}

interface StudentInfoNAR {
  name: string;
  average: number;
  result: string;
}

const getStudentResult = (student: StudentInfo): StudentInfoNAR => {
  const total = student.marks.reduce((sum, item) => sum + item, 0);

  const average =
    student.marks.length === 0 ? 0 : total / student.marks.length;

  const result = average >= 40 ? "Passed" : "Failed";

  return {
    name: student.name,
    average,
    result,
  };
};
console.log(getStudentResult({ 
    name: "Rafi", 
    marks: [80, 75, 90, 85] 
}));

console.log(getStudentResult({ 
    name: "Nabil", 
    marks: [30, 35, 40, 25] 
}));