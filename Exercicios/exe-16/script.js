window.onload = () => {
    const inpOne = document.querySelector('#inpOne');
    const inpTwo = document.querySelector('#inpTwo');
    const result = document.querySelector('#result');

    inpTwo.addEventListener('blur', () => {
        let numero1 = Number(inpOne.value);
        let numero2 = Number(inpTwo.value);

        result.value = numero1 + numero2;
    });

};