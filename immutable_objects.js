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