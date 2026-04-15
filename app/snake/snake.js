export class SnakeGame {
    constructor(mapSizeX, mapSizeY, tick = 800, onTick = null) {
        this.mapSizeX = mapSizeX;
        this.mapSizeY = mapSizeY;
        this.tick = tick;
        this.onTick = onTick;

        this.map = this.generateMap();
        this.snake = this.createSnake(Math.floor(mapSizeX / 2), Math.floor(mapSizeY / 2));
        this.mapChanges = [];
        this.score = 0;
        this.gameOver = false;
        this.food = false;

        this.generateFood();
        setTimeout(() => this.mainLoop(), 10);
    }

    generateMap() {
        return Array.from({ length: this.mapSizeY }, () => Array(this.mapSizeX).fill(0));
    }

    createSnake(posX, posY) {
        return {
            pos: [[posX, posY], [posX + 1, posY]],
            length: 2,
            direction: 0, // 0=L, 1=U, 2=R, 3=D
        };
    }

    mainLoop() {
        if (!this.gameOver) {
            this.moveSnake();
            if (this.onTick) {
                const changes = this.flushChanges();
                this.onTick(changes);
            }
            setTimeout(() => this.mainLoop(), this.tick);
        }
    }

    moveSnake() {
        const { direction } = this.snake;
        const headPos = this.snake.pos[0];

        const deltas = [[-1, 0], [0, -1], [1, 0], [0, 1]]; // L U R D
        const [dx, dy] = deltas[direction];
        const newPos = [
            (headPos[0] + dx + this.mapSizeX) % this.mapSizeX,
            (headPos[1] + dy + this.mapSizeY) % this.mapSizeY,
        ];
        console.log(`${newPos[0]} ${newPos[1]}`)
        switch (this.map[newPos[1]][newPos[0]]) {
            case 1:
                this.gameOver = true;
                break;
            case 2:
                this.eat(newPos);
                this.generateFood();
                break;
            default:
                this.move(newPos);
                break;
        }
    }

    eat(newPos) {
        this.map[newPos[1]][newPos[0]] = 1;
        this.mapChanges.push({ x: newPos[0], y: newPos[1], value: 1 });
        this.snake.pos.unshift(newPos);
        this.snake.length++;
        this.score++;
        this.food = false;
    }

    move(newPos) {
        const tail = this.snake.pos[this.snake.pos.length - 1];

        this.map[newPos[1]][newPos[0]] = 1;
        this.mapChanges.push({ x: newPos[0], y: newPos[1], value: 1 });

        this.map[tail[1]][tail[0]] = 0;
        this.mapChanges.push({ x: tail[0], y: tail[1], value: 0 });

        this.snake.pos.unshift(newPos);
        this.snake.pos.pop();
    }

    generateFood() {
        while (!this.food) {
            const x = Math.floor(Math.random() * this.mapSizeX);
            const y = Math.floor(Math.random() * this.mapSizeY);
            if (this.map[y][x] === 0) {
                this.map[y][x] = 2;
                this.mapChanges.push({ x, y, value: 2 });
                this.food = true;
            }
        }
    }

    setDirection(newDirection) {
        const opposite = { 0: 2, 2: 0, 1: 3, 3: 1 };
        if (newDirection !== opposite[this.snake.direction]) {
            this.snake.direction = newDirection;
        }
    }

    flushChanges() {
        const changes = [...this.mapChanges];
        this.mapChanges = [];
        return changes;
    }

    getScore() { return this.score; }
    isGameOver() { return this.gameOver; }
    getMap() { return this.map; } // useful for initial render
}