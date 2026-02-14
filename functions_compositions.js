const R = require('./rambda.min.js');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';


const countNumeric = R.pipe(
    R.split(''),                     // String ist Array von Zeichen
    R.filter(c => !isNaN(c) && c.trim() !== ''), // Prüft ob Zahl und kein Leerzeichen
    R.length                         // Länge des Arrays wo hier ist
);

const result = countNumeric(sentence);
console.log("Anzahl numerische Zeichen:", result);