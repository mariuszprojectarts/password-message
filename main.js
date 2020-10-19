const input = document.getElementById('pass');

const div = document.querySelector('.message');
const passwords = ['user', 'wiosna']
const messages = ['wiadomośc dla użytkownika', 'piękna pora roku'];

input.addEventListener('input', function (e) {
    //console.log(e.target.value);
    div.textContent = '';

    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })



    // if (password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = '';
    // } else {
    //     div.textContent = '';
    // }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})