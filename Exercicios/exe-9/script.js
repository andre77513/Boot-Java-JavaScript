let carros = ['VW', 'Toyota', 'Honda', 'Ford', 'Nissan', 'Chevrolet'];

function array(car, name, indi) {
    console.log(`A quantidade de elementos do array é: ${car.length}`);

    if (car.indexOf(name) == -1) {
        car.push(name);
    } else {
        console.log('Este nome já existe na lista!');
    }

    let indice = car[indi];

    console.log(`Você escolheu o índice ${indi} que é o elemento: ${indice}`);
    console.log(`A quantidade atual de elementos do array é: ${car.length}`);
};
array(carros, 'Hyundai', 3);