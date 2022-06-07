const Frutas = [
    { "nome": "Maçã", "preco": 2.99 },
    { "nome": "uva", "preco": 6.82 },
    { "nome": "Jaca", "preco": 1.55 }
];

(function (fru) {

    for (let i of fru) {
        for (let j in i) {
            console.log(`${j}: ${i[j]}`);
        };
    };

})(Frutas);