window.onload = () => {
    const lista = document.querySelector('#lista');
    const btn = document.querySelector('#btn');

    let veiculos = ["Ônibus", "Motocicleta", "Patinete", "Carro"];

    btn.addEventListener('click', () => {

        for (let i of veiculos) {
            let li = document.createElement('li');
            lista.appendChild(li).textContent = `${i}`;
        }

    });

};