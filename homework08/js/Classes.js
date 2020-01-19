class Component {
    constructor(node) {
        this.$node = node;
    }

    setAbsolute() { this.$node.style.position = 'absolute' }
    setStatic() { this.$node.style.position = 'static' }
    appendNode() { gameField.appendChild(this.$node) }
    removeNode() { gameField.removeChild(this.$node) }
    show() { this.$node.style.display = 'block' }
    hide() { this.$node.style.display = 'none' }
    setAttribute(attr, val) { this.$node.setAttribute(attr, val) }

    get width() { return this.w }
    get height() { return this.h }
    get xPosition() { return this.x }
    get yPosition() { return this.y }

    set width(width) {
        this.w = width;
        this.$node.width = this.w;
    }
    set height(height) {
        this.h = height;
        this.$node.height = this.h;
    }
    set xPosition(x) {
        this.x = x;
        this.$node.style.left = `${this.xPosition}px`;
    }
    set yPosition(y) {
        this.y = y;
        this.$node.style.top = `${this.yPosition}px`;
    }
}


class Bird extends Component {
    constructor() {
        super(document.createElement('img'));
        this.$node.classList.add('bird');
    }

    renderBird() {
        this.setAbsolute();
        this.setAttribute('src', 'res/bird.gif');
        this.randPosition();
        this.$node.onclick = (e) => {
            event.stopPropagation();
            this.removeNode();
        }
        this.appendNode();
    }

    randPosition() {
        this.yPosition = getRandomInteger(150, gameField.offsetHeight - 150);
        if (getRandomInteger(0, 2) == 0) {
            this.setDirection('left');
            this.xPosition = gameField.offsetWidth;
        } else {
            this.setDirection('right');
            this.xPosition = -200;
        }
    }
    setDirection(_direction) {
        this.direction = _direction;
        this.direction == 'left' ?
            this.$node.style.transform = 'scale(-1, 1)' :
            this.$node.style.transform = '';
    }
    fly() {
        if (this.direction == 'right') {
            setTimeout(() => {
                this.xPosition += 30;
                if (this.xPosition > gameField.offsetWidth) {
                    this.setDirection('left');
                    this.randPosition();
                }
                this.fly();
            }, 50);
        } else {
            setTimeout(() => {
                this.xPosition -= 30;
                if (this.xPosition < -200) {
                    this.setDirection('right');
                    this.randPosition();
                }
                this.fly();
            }, 50);
        }
    }
}


class Dart extends Component {
    constructor() {
        super(document.createElement('img'));
    }

    renderDart() {
        this.setAbsolute();
        this.setAttribute('src', 'res/dart.png')
        this.appendNode();
        // document.body.style.cursor = 'none'
        this.isAnimate = false;
        this.width = 75;
        this.$node.style.transform = `translate(0, -100%)`
    }
    setPosition(x, y) {
        this.xPosition = x;
        this.yPosition = y;
    }
    animate() {
        this.setAttribute('src', 'res/dart.gif');
        this.$node.style.transform = `scale(1, 1)`
        this.isAnimate = true;
        setTimeout(() => {
            this.$node.style.transform = `translate(0, -100%)`
            this.setAttribute('src', 'res/dart.png');
            this.isAnimate = false;
        }, 1050);
    }
}

class Score extends Component {
    constructor(numb) {
        super(document.createElement('div'));
        this.setScore(numb);
        this.$node.classList.add('score');
    }

    addScore(number) {
        this.score += number;
        this.$node.innerText = this.score;
    }
    setScore(number) {
        number >= 0 ? this.score = number : this.score = 0;
        this.$node.innerText = this.score;
    }
    getScore() {
        return this.score;
    }
}
