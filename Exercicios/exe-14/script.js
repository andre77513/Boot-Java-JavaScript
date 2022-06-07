window.onload = () => {
    const inp = document.querySelector('#inp');
    const btn = document.querySelector('#btn');


    btn.addEventListener('click', () => {
        let numero = Number(inp.value);
        if (numero < 1 || numero > 10) {
            alert('Número inválido! Por favor digite um número entre 0 e 10.');
        } else {
            console.log('Tabuada do: ', numero);
            tabuada(numero);
        };
    });

    function tabuada(par) {
        let numero = 0;
        while (numero <= 10) {
            console.log(numero * par);
            numero++;
        }
    };

};