// 1. Primitive Variable
const id = 123;
console.log("ID:", id);
// id = 456; // Würde einen Fehler geben

// 2. Konstante Variable mit Objekt
const user = {
    name: "Max Mustermann",
    age: 25,
    city: "Zürich"
};
console.log("Ursprüngliches Objekt:", user);

// 3. Eigenschaft hinzufügen
// also ich nutze einen Spread Operator um eine Kopie zu erstellen und die neue Eingenschaft anzuhägnen
const userWithEmail = { ...user, email: "max@example.com" };
console.log("Objekt mit neuer Eigenschaft:", userWithEmail);


// 4. Eigenschaft verändern
// Ich erstelle wieder eine Kopie und überschreibe dennn  Wert
const userWithNewAge = { ...user, age: 26 };
console.log("Objekt mit veränderter Eigenschaft:", userWithNewAge);



// 5. Eigenschaft entfernen 
// Ich nutze Destrukturierung damit die Eigenschaft 'city' herauszulösen. 'restUser' enthält den Rest.
const { city, ...userWithoutCity } = user;
console.log("Objekt ohne Eigenschaft 'city':", userWithoutCity);