class HoneyMakerBee extends Bee {
    honeyPot: number;
    makeHoney(): number {
        return this.honeyPot += 1;
    }
    giveHoney(): number {
        return this.honeyPot -= 1;
    }

    constructor(age: number, color: string, food: string, eat: string, job: string) {
        super(age, color, food, eat);
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    }
 };