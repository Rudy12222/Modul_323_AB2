// 1. Array mit Objekten und eindeutigem Identifikator
const items = [
    { id: 1, name: "Artikel A", price: 10.5 },
    { id: 2, name: "Artikel B", price: 20.0 }
];
console.log("Ursprüngliches Array:", items);


// 2. Neues Array mit zusätzlichem Element
const newItems = [...items, { id: 3, name: "Artikel C", price: 5.0 }];
console.log("Array mit neuem Element:", newItems);

// 3. Neues Array mit aktualisiertem Element
// Also ich werde den Preis von "Artikel 1" (id: 1)
const updatedItems = items.map(item => {
    if (item.id === 1) {
        // Neues Objekt wird zurückgeben statt das alte zu ändern
        return { ...item, price: 15.0 };
    }
    return item;
});
console.log("Array mit aktualisiertem Preis:", updatedItems);


// 4. Element mit kleinstem Identifikator entfernen
// Kleinste ID ist 1. Ich filtere alle Elemente die nicht die id 1 haben
const filteredItems = items.filter(item => item.id !== 1);
console.log("Array ohne Element mit kleinster ID:", filteredItems);



// 5. Durchschnitt berechnen
const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const average = reviews.reduce((acc, val, idx, arr) => {
    acc += val;
    if (idx === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
}, 0);
console.log("Durchschnitt der Bewertungen:", average.toFixed(2));


// 6. Werte gruppieren und zählens
const groupedReviews = reviews.reduce((counter, val) => {
    let key = "";
    if (val >= 4) key = "good";
    else if (val >= 2.5) key = "ok";
    else key = "bad";

    counter[key] = (counter[key] || 0) + 1;
    return counter;
}, {});

console.log("Gruppierte Bewertungen:", groupedReviews);