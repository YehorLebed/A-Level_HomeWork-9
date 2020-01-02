/* 16. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут
и вставляйте рядом. */
const btn = document.getElementById('btn');
const input = document.querySelector('input');
btn.onmousedown = () => {
    const inputClone = input.cloneNode();
    btn.after(inputClone);
}