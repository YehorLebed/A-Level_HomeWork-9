// КОНСТАНТЫ
const gameField = document.getElementById('game');
const score = new Score(0);
const birds = [];
let timerID = 0;
// Центр мишени
const CENTER = {
    x: document.body.offsetWidth / 2,
    y: document.body.offsetHeight / 2
};

// Радиус области попадания
const TARGET_1_RADIUS = document.querySelector('.target-primary').offsetWidth / 2;
const TARGET_2_RADIUS = document.querySelector('.target-gold').offsetWidth / 2;
const TARGET_3_RADIUS = document.querySelector('.target-silver').offsetWidth / 2;
const TARGET_4_RADIUS = document.querySelector('.target-medium').offsetWidth / 2;

// Количество получаемых очков за попадание
const TARGET_1_SCORE = 15;
const TARGET_2_SCORE = 10;
const TARGET_3_SCORE = 5;
const TARGET_4_SCORE = 1;

// Определяет тип мишени куда попал дротик
function findTarget(coords) {
    const leg1 = Math.abs(CENTER.x - coords.x);
    const leg2 = Math.abs(CENTER.y - coords.y);
    const hypotenuse = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));

    if (hypotenuse <= TARGET_1_RADIUS) score.addScore(TARGET_1_SCORE);
    else if (hypotenuse <= TARGET_2_RADIUS) score.addScore(TARGET_2_SCORE);
    else if (hypotenuse <= TARGET_3_RADIUS) score.addScore(TARGET_3_SCORE);
    else if (hypotenuse <= TARGET_4_RADIUS) score.addScore(TARGET_4_SCORE);
    else return;

}

// Рандомное число от min до max
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Старт игры
function startGame() {
    // Птички
    for (let i = 0; i < 5; i++) {
        birds.push(new Bird());
        birds[i].renderBird
        setTimeout(() => {
            const bird = new Bird();
            bird.renderBird();
            bird.fly();
        }, i * 1000);
    }

    // Дротик
    const dart = new Dart();
    dart.renderDart();
    document.body.onmousemove = (event) => {
        if (dart.isAnimate === false) {
            dart.setPosition(event.x, event.y);
        }
    }
    document.body.onclick = () => {
        const coords = {
            x: dart.xPosition,
            y: dart.yPosition
        }
        dart.animate();
        setTimeout(() => {
            findTarget(coords);
        }, 1050);
    }
    // Счет
    score.setScore(0);
    score.appendNode();
}

function createGreetings() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const button = document.createElement('button');
    button.classList.add('startButton');
    button.innerText = 'Start Game!';

    button.onclick = (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        gameField.style.cursor = 'none';
        startGame();
    };

    menu.appendChild(button);
    gameField.appendChild(menu);
}

window.onload = () => {
    createGreetings();
    document.querySelector('.menu').style.display = 'flex';
}

