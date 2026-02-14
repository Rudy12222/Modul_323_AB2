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
