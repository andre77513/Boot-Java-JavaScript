const palavra = 'caminhão';

function manipulandoString(pal) {
    let maiusculo = pal.toLocaleUpperCase();

    document.write(`A palavra ${pal} tem ${pal.length} caracteres. <br>
    A palavra ${pal} ficou ${maiusculo}.<br>
    A letra ${maiusculo[2]} é o 3° caractere da palavra ${maiusculo}.<br>
    ${maiusculo} ficou ${maiusculo.replace('M', 'X')}.
    `);

    console.log(`A palavra ${pal} tem ${pal.length} caracteres.
A palavra ${pal} ficou ${maiusculo}. 
A letra ${maiusculo[2]} é o 3° caractere da palavra ${maiusculo}. 
${maiusculo} ficou ${maiusculo.replace('M', 'X')}.
`)

};
manipulandoString(palavra);
