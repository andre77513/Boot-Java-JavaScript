const Url = '../scripts/user.json';

async function getUsers(name, login) {
    const getFetch = await fetch(Url);
    const getJson = await getFetch.json();

    let index = 0;
    let userOK;

    do {

        userOK = getJson.users[index].user == name && getJson.users[index].pws == login;

        if (userOK == false) {
            index++;
        }

    } while (userOK == false && index < getJson.users.length);

    switch (userOK) {
        case true:
            location.href = '../views/panel.html';
            break;
        default:
            modalMsg.innerHTML = 'Usuário e/ou senha incorretos!'
            modal.className = 'open-modal';
    };
};

const nameUser = document.querySelector('#user');
const loginUser = document.querySelector('#login');
const modal = document.querySelector('#modal');
const modalMsg = document.querySelector('#msg');

function btnLogin(par) {
    const btn = document.querySelector(`#${par}`);
    btn.addEventListener('click', () => {

        if (nameUser.value == '' || loginUser.value == '') {
            modalMsg.innerHTML = 'Campo vazio! Por favor preencha os campos!';
            modal.className = 'open-modal';
        } else {
            let name = nameUser.value.trim();
            let login = loginUser.value.trim();
            getUsers(name, login);
        };
    });
};

function closeModal() {
    const btnModal = document.querySelector('#btnModal');
    btnModal.addEventListener('click', () => {
        modal.className = 'close';
    });
};

export { btnLogin, closeModal };