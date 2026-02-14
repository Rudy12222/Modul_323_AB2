// 1. Array mit Objekten und eindeutigem Identifikator
const items = [
    { id: 1, name: "Artikel A", price: 10.5 },
    { id: 2, name: "Artikel B", price: 20.0 }
];
console.log("Ursprüngliches Array:", items);


// 2. Neues Array mit zusätzlichem Element
const newItems = [...items, { id: 3, name: "Artikel C", price: 5.0 }];
console.log("Array mit neuem Element:", newItems);