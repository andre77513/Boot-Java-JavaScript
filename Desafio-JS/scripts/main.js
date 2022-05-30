import { Clientes } from "./clientes.js";
import { Produtos } from "./produtos.js";

const modal = document.querySelector('#modal');
const modalMsg = document.querySelector('#msg');


let date = new Date();
let formattedDate = date.toLocaleString('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit' });

const windowClient = document.querySelector('#windowClient');
const windowProducts = document.querySelector('#windowProducts');
const windowOrderControl = document.querySelector('#windowOrderControl');

// * Início das opções do menu *
function pageMenu() {
    const secMenu = document.querySelector('#secMenu');

    secMenu.addEventListener('click', (element) => {
        switch (element.target.id) {
            case 'btnClient':
                if (windowProducts.className == 'open-window') {
                    windowProducts.className = 'close';
                    windowClient.className = 'open-window';
                } else {
                    windowOrderControl.className == 'open-window-order';
                    windowOrderControl.className = 'close';
                    windowClient.className = 'open-window';
                };
                break;
            case 'btnProduct':
                if (windowClient.className == 'open-window') {
                    windowClient.className = 'close';
                    windowProducts.className = 'open-window';
                } else {
                    windowOrderControl.className == 'open-window-order';
                    windowOrderControl.className = 'close';
                    windowProducts.className = 'open-window';
                };
                break;
            case 'btnOrder':
                if (windowClient.className == 'open-window') {
                    windowClient.className = 'close';
                    windowOrderControl.className = 'open-window-order';
                } else {
                    windowProducts.className == 'open-window';
                    windowProducts.className = 'close';
                    windowOrderControl.className = 'open-window-order';
                };
                break;
        };
    });
};
// * Fim das opções do menu *

// * Início da janela menu de clientes e seus métodos *
const codeCli = document.querySelector('#codeCli');
const nameCli = document.querySelector('#nameCli');
const dateCad = document.querySelector('#dateCad');

let indexCli = 0;

codeCli.value = Clientes[indexCli].codCliente;
nameCli.value = Clientes[indexCli].nomeCliente;
dateCad.value = Clientes[indexCli].dataCadCli;

const saveCli = document.querySelector('#saveCli');
let autoCodeCli = 4;

function clientMenu() {
    windowClient.addEventListener('click', (element) => {
        switch (element.target.id) {
            case 'closeCli':
                windowClient.className = 'close';
                break;
            case 'newCli':
                nameCli.placeholder = 'Digite o nome do cliente';
                saveCli.dataset.savecli = 'unlocked';
                codeCli.value = autoCodeCli;
                nameCli.value = '';
                dateCad.value = formattedDate;
                break;
            case 'saveCli':
                if (saveCli.dataset.savecli == 'blocked') {
                    modalMsg.innerHTML = 'Por favor, clique em Novo para inserir um cliente ao registro!';
                    modal.className = 'open-modal';
                } else if (nameCli.value == '') {
                    modalMsg.innerHTML = 'Campo nome vazio! Por favor digite o nome que deseja cadastrar.';
                    modal.className = 'open-modal';
                } else {
                    createClients(nameCli.value);
                    codeCli.value = Clientes[indexCli].codCliente;
                    nameCli.value = Clientes[indexCli].nomeCliente;
                    dateCad.value = Clientes[indexCli].dataCadCli;
                };
                break;
            case 'previousCli':
                saveCli.dataset.savecli = 'blocked';
                if (indexCli == 0) {
                    modal.className = 'open-modal';
                    modalMsg.innerHTML = 'Primeiro cliente do registro!';
                } else {
                    indexCli--;
                    codeCli.value = Clientes[indexCli].codCliente;
                    nameCli.value = Clientes[indexCli].nomeCliente;
                    dateCad.value = Clientes[indexCli].dataCadCli;
                };
                break;
            case 'nextCli':
                saveCli.dataset.savecli = 'blocked';
                if (indexCli < Clientes.length - 1) {
                    indexCli++;
                    codeCli.value = Clientes[indexCli].codCliente;
                    nameCli.value = Clientes[indexCli].nomeCliente;
                    dateCad.value = Clientes[indexCli].dataCadCli;
                } else {
                    modal.className = 'open-modal';
                    modalMsg.innerHTML = 'Último cliente do registro!';
                };
                break;
        };
    });
};

function createClients(name) {
    let newClients = {};
    let nameSpace = name.trim();

    indexCli = 0;
    newClients = { 'codCliente': autoCodeCli, 'nomeCliente': nameSpace, 'dataCadCli': formattedDate };
    Clientes.push(newClients);
    autoCodeCli++;
    modalMsg.innerHTML = 'Cliente cadastrado com sucesso.';
    modal.className = 'open-modal';
    saveCli.dataset.savecli = 'blocked';
};
// * Fim da janela menu de clientes e seus métodos *

// * Início da janela menu de produtos e seus métodos *
const codeProd = document.querySelector('#codeProd');
const description = document.querySelector('#description');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');

let indexProd = 0;

codeProd.value = Produtos[indexProd].codProduto;
description.value = Produtos[indexProd].descProduto;
price.value = Produtos[indexProd].precoProduto;
quantity.value = Produtos[indexProd].qtdEstoqueProd;

const saveProd = document.querySelector('#saveProd');
let autoCodeProd = 3;

function productMenu() {
    windowProducts.addEventListener('click', (element) => {

        switch (element.target.id) {
            case 'closeProd':
                windowProducts.className = 'close';
                break;
            case 'newProd':
                description.placeholder = 'Digite a descrição do produto';
                price.placeholder = 'Digite o preço do produto ex: 1.50';
                quantity.placeholder = 'Digite a quantidade do produto ex: 10';

                saveProd.dataset.saveprod = 'unlocked';
                codeProd.value = autoCodeProd;
                description.value = '';
                price.value = '';
                quantity.value = '';
                break;
            case 'saveProd':
                if (saveProd.dataset.saveprod == 'blocked') {
                    modalMsg.innerHTML = 'Por favor, clique em novo para inserir um produto ao registro!';
                    modal.className = 'open-modal';
                } else if (description.value == '' || price.value == '' || quantity.value == '') {
                    modalMsg.innerHTML = 'Campo vazio! Por favor preencha todos os campos para cadastrar um novo produto.';
                    modal.className = 'open-modal';
                } else {
                    createProducts(description.value, price.value, quantity.value);
                    codeProd.value = Produtos[indexProd].codProduto;
                    description.value = Produtos[indexProd].descProduto;
                    price.value = Produtos[indexProd].precoProduto;
                    quantity.value = Produtos[indexProd].qtdEstoqueProd;
                };
                break;
            case 'previousProd':
                saveProd.dataset.saveprod = 'blocked';

                if (indexProd == 0) {
                    modal.className = 'open-modal';
                    modalMsg.innerHTML = 'Primeiro produto do registro!';
                } else {
                    indexProd--;
                    codeProd.value = Produtos[indexProd].codProduto;
                    description.value = Produtos[indexProd].descProduto;
                    price.value = Produtos[indexProd].precoProduto;
                    quantity.value = Produtos[indexProd].qtdEstoqueProd;
                };
                break;
            case 'nextProd':
                saveProd.dataset.saveprod = 'blocked';

                if (indexProd < Produtos.length - 1) {
                    indexProd++;
                    codeProd.value = Produtos[indexProd].codProduto;
                    description.value = Produtos[indexProd].descProduto;
                    price.value = Produtos[indexProd].precoProduto;
                    quantity.value = Produtos[indexProd].qtdEstoqueProd;
                } else {
                    modal.className = 'open-modal';
                    modalMsg.innerHTML = 'Último produto do registro!';
                };
                break;
        };
    });
};

function createProducts(desc, pri, qtd) {
    let newProducts = {};
    let descSpace = desc.trim();
    let priceNumber = Number(pri);
    let qtdNumber = Number(qtd);
    let index = 0;
    let productExists;

    do {

        productExists = Produtos[index].descProduto == descSpace;

        if (productExists == false) {
            index++;
        }

    } while (productExists == false && index < Produtos.length);

    switch (productExists) {
        case true:
            modalMsg.innerHTML = 'Esta descrição já existe! Por favor escolha outra descrição para inserir ao registro!';
            modal.className = 'open-modal';
            saveCli.dataset.saveprod = 'blocked';
            break;
        default:
            indexProd = 0;
            newProducts = { "codProduto": autoCodeProd, "descProduto": descSpace, "precoProduto": priceNumber, "qtdEstoqueProd": qtdNumber };

            Produtos.push(newProducts);
            autoCodeProd++;
            modalMsg.innerHTML = 'Produto cadastrado com sucesso.';
            modal.className = 'open-modal';
            saveProd.dataset.saveprod = 'blocked';
    };

};
// * Fim da janela menu de produtos e seus métodos *

// * Início da janela de controle de pedidos e seus métodos *
const inputCliCode = document.querySelector('#inputCliCode');
const inputCliName = document.querySelector('#inputCliName');

const findCodePro = document.querySelector('#findCodePro');
const descriptionProd = document.querySelector('#descriptionProd');
const priceProd = document.querySelector('#priceProd');
const theAmount = document.querySelector('#theAmount');
const btnLaunch = document.querySelector('#btnLaunch');
const inpTotal = document.querySelector('#inpTotal');

const itemDescCode = document.querySelector('#itemDescCode');
const itemDesc = document.querySelector('#itemDesc');
const itemPrice = document.querySelector('#itemPrice');
const itemQtd = document.querySelector('#itemQtd');
const itemSubTotal = document.querySelector('#itemSubTotal');

function orderMenu() {
    windowOrderControl.addEventListener('click', (element) => {
        if (element.target.id == 'closeOrder') {
            windowOrderControl.className = 'close';
        };
    });
};

function getClient() {
    inputCliCode.addEventListener('blur', () => {
        switch (inputCliCode.value) {
            case '':
                modalMsg.innerHTML = `Campo vazio! Por favor digite o ${inputCliCode.title} para localiza-lo.`;
                modal.className = 'open-modal';
                break;
            default:
                let index = 0;
                let clientExists;
                do {
                    clientExists = Clientes[index].codCliente == inputCliCode.value;
                    if (clientExists == false) {
                        index++;
                    }
                } while (clientExists == false && index < Clientes.length);
                if (clientExists == true) {
                    inputCliName.value = Clientes[index].nomeCliente;
                } else {
                    modalMsg.innerHTML = 'Cliente não encontrado! Este código não existe.';
                    modal.className = 'open-modal';
                    inputCliName.value = '';
                };
        };
    });
};

function getProduct() {
    findCodePro.addEventListener('blur', () => {
        switch (findCodePro.value) {
            case '':
                modalMsg.innerHTML = `Campo vazio! Por favor digite o ${findCodePro.title} para localiza-lo.`;
                modal.className = 'open-modal';
                break;
            default:
                let inProduct = 0;
                let productExists;
                do {
                    productExists = Produtos[inProduct].codProduto == findCodePro.value;
                    if (productExists == false) {
                        inProduct++;
                    }
                } while (productExists == false && inProduct < Produtos.length);
                if (productExists == true) {
                    priceProd.value = Produtos[inProduct].precoProduto;
                    descriptionProd.value = Produtos[inProduct].descProduto;
                } else {
                    modalMsg.innerHTML = 'Produto não encontrado! Este código não existe.';
                    modal.className = 'open-modal';
                };
        };
    });
};

function launch() {
    let checklist = [];

    btnLaunch.addEventListener('click', () => {
        let index = Number(findCodePro.value) - 1;

        switch (theAmount.value) {
            case '':
                modalMsg.innerHTML = `Campo vazio! Por favor digite a ${theAmount.title} do produto.`;
                modal.className = 'open-modal';
                break;
            default:
                if (Number(theAmount.value) > Produtos[index].qtdEstoqueProd) {
                    modalMsg.innerHTML = `Quantidade escolhida não disponível! Quantidade em estoque: ${Produtos[index].qtdEstoqueProd}`;
                    modal.className = 'open-modal';
                } else if (checklist.indexOf(Produtos[index].codProduto) != -1) {
                    modalMsg.innerHTML = 'Este produto já existe no pedido! Por favor escolha outro produto.';
                    modal.className = 'open-modal';
                } else if (inputCliName.value == '') {
                    modalMsg.innerHTML = `Campo ${inputCliName.title} vazio! Por favor escolha um ${inputCliName.title} para inserir no pedido.`;
                    modal.className = 'open-modal';
                } else {
                    inpTotal.innerHTML = sumTotal(Number(priceProd.value), Number(theAmount.value));
                    inpTotal.className = 'input-total';

                    createList(findCodePro.value, descriptionProd.value, priceProd.value, theAmount.value);

                    findCodePro.value = '';
                    descriptionProd.value = '';
                    priceProd.value = '';
                    theAmount.value = '';

                    if (checklist.indexOf(Produtos[index].codProduto) == -1) {
                        checklist.push(Produtos[index].codProduto);
                    };

                };
        };
    });
};

function createList(ite, des, pri, qtd,) {
    const liCode = document.createElement('li');
    const liDes = document.createElement('li');
    const liPri = document.createElement('li');
    const liQtd = document.createElement('li');
    const liSbt = document.createElement('li');

    itemDescCode.appendChild(liCode).setAttribute('class', 'itemMsg');
    liCode.innerHTML = ite;
    itemDesc.appendChild(liDes).setAttribute('class', 'itemMsg');
    liDes.innerHTML = des;
    itemPrice.appendChild(liPri).setAttribute('class', 'itemMsg');
    liPri.innerHTML = pri;
    itemQtd.appendChild(liQtd).setAttribute('class', 'itemMsg');
    liQtd.innerHTML = qtd;
    itemSubTotal.appendChild(liSbt).setAttribute('class', 'itemMsg');
    liSbt.innerHTML = pri * qtd;
};

let sum = 0;
function sumTotal(valueOne, valueTwo) {
    sum += valueOne * valueTwo;
    let result = sum;
    return result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};
// * Fim da janela de controle de pedidos e seus métodos *

export { pageMenu, clientMenu, productMenu, orderMenu, launch, getClient, getProduct };




