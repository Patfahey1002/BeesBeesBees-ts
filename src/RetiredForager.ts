class RetiredForagerBee extends ForagerBee {
    gamble(): void {
        this.treasureChest.push('treasure');
    }
    
    
    constructor(age: number, color: string, food: string, eat: string, job: string) {
        super(age, color, food, eat, job);
        this.age = 40;
        this.job = 'gamble';
        this.canFly = false;
        this.color = 'grey';
        }
        
        forage(): string {
            return 'I am too old, let me play cards instead';
    }
};