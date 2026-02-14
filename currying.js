const R = require('./rambda.min.js'); 

//1. Student Grades Transformation

const studentGrades = [
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
];

// Hilfsfunktion für Noten Text und buchstaben
const getGradeInfo = (grade) => {
    if (grade >= 90) return { letter: 'a', text: 'Excellent Job' };
    if (grade >= 80) return { letter: 'b', text: 'Nice Job' };
    if (grade >= 70) return { letter: 'c', text: 'Well done' };
    if (grade >= 60) return { letter: 'd', text: 'What happened' };
    return { letter: 'f', text: 'Not good' };
};

// Curried Funktion: Zuerst muss die 'gradeInfo' Logik übergeben werde und dann das Studenten Objekt
const createFeedback = (gradeFn) => (student) => {
    const info = gradeFn(student.grade);
    return `${info.text} ${student.name}, you got an ${info.letter}`;
};

// Anwendung mit map
// Ich übergeb 'getGradeInfo' zu 'createFeedback' was eine neue Funktion zurückgibt wird die dann auf jeden Studenten angewendet wird.
const studentFeedback = studentGrades.map(createFeedback(getGradeInfo));
console.log("Student Feedback:", studentFeedback);



// 2. Rambda Verwendung

const strings = ["Apfel", "Banane", "Birne"];

// Curry Funktion mit Ramda erstellen
const addPrefix = R.curry((prefix, str) => prefix + str);

// Partial Application: Ich übergebe nur den ersten Parameter ("Lecker "). Das Ergebnis 'addLecker' ist eine Funktion die nur noch den String erwartet.
const addLecker = addPrefix("Lecker ");

// Verwendung in map: Ich muss einfach nur 'addLecker' keinen weiteren Parameter mehr mitgeben da der map den aktuellen Wert als Argument übergibt.
const leckereFruechte = strings.map(addLecker);
console.log("Mit Präfix:", leckereFruechte);

