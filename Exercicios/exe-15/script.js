window.onload = () => {
    const inp = document.querySelector('#inp');
    const btn = document.querySelector('#btn');
    const resp = document.querySelector('#resp');
    const titulo = document.querySelector('#titulo');


    btn.addEventListener('click', () => {
        let numero = Number(inp.value);
        if (numero < 1 || numero > 10) {
            alert('Número inválido! Por favor digite um número entre 0 e 10.');
        } else {
            console.log(`Tabuada do: ${numero}`);
            titulo.innerHTML = `Tabuada do: ${numero}`;
            tabuada(numero);
        };
    });

    function tabuada(par) {
        let numero = 0;
        while (numero <= 10) {
            console.log(`${par} x ${numero} = ${numero * par}`);
            resp.innerHTML += `${par} x ${numero} = ${numero * par} <br>`;
            numero++;
        }
    };

};