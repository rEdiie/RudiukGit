import { IWaterHeater } from './abstractions/i-water-heater';
import { IHeatable } from './abstractions/i-heatable';

export class Kettle implements IWaterHeater, IHeatable {
    public desiredTemperature: number;
    public currentTemperature: number;
    public powerState: boolean;

    public constructor(public readonly name: string) {
        this.currentTemperature = 18;
        this.powerState = false;
        this.desiredTemperature = 100;
    }

    public turnOn(): void {
        this.powerState = true;
    }

    public turnOff(): void  {
        this.powerState = false;
    }

    public setTemperature(temperature: number): number {
        this.desiredTemperature = temperature;
        return this.desiredTemperature;
    }

    public heatWater(): void {
        if (!this.powerState) {
            console.log(`${this.name} is not on!`);
            return;
        }

        while (this.currentTemperature < this.desiredTemperature) {
            this.currentTemperature ++;
            console.log(`${this.name} is heating up... ${this.currentTemperature}°C`);
        }
    }

    public getInfo(): string {
        return `Device: ${this.name} (type: Kettle, desired temp: ${this.desiredTemperature}°C)`;
    }

    public pour(): void {
        console.log(`${this.name} is pouring hot water... ☕`);
    }
}
