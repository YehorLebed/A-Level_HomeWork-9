/* 6. Создать button и повесить обработчик. При при нажатии должно выдавать
alert("Hey") */
const button = document.createElement('button');
button.innerText = 'I am a button';
document.body.append(button);
button.onmousedown = () => alert('hey');