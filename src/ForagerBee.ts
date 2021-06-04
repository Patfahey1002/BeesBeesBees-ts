class ForagerBee extends Bee {
    canFly: boolean;
    treasureChest: string[];
    forage(): void {
        this.treasureChest.push('treasure');
    }

    constructor(age: number, color: string, food: string, eat: string, job: string) {
        super(age, color, food, eat);
        this.age = 10;
        this.job = 'find pollen';
        this.canFly = true;
        this.treasureChest = [];
    }
};