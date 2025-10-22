import { CoffeeMachine } from './coffee-machine';
import { ICoffeeWaterHeater } from './abstractions/i-coffee-water-heater';
import { IHeatable } from './abstractions/i-heatable';


export class ProfessionalCoffeeMachine extends CoffeeMachine implements ICoffeeWaterHeater, IHeatable {
    public waterRelayState = false;
    public waterLevel: number;

    public constructor(name: string) {
        super(name);
        this.waterLevel = 500;
    }

    public heatWater(): void {
        this.heatWaterInsideLogicForMomentum();
    }

    public waterResidue(): void {
        this.makeCoffee();
    }

    private heatWaterInsideLogicForMomentum(): void {
        if (!this.powerState) {
            console.log(`${this.name} is not on!`);
            return;
        }

        if (this.waterRelayState) {
            console.log(`${this.name} is heating up...`);
            super.heatWater();
        } else {
            console.log('No water flow detected');
        }
    }

    public getInfo(): string {
        return `Device: ${this.name} (type: Coffee Machine, desired temp: ${this.desiredTemperature}°C)`;
    }

    private makeCoffee(): void {
        if (this.waterLevel < 100) {
            console.log(`${this.name}: Not enough water to make coffee!`);
            return;
        }
        this.waterLevel -= 100;
        console.log(`${this.name} : making coffee (water level: ${this.waterLevel}ml)`);
    }
}
