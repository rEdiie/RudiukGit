import { IWaterHeater } from './abstractions/i-water-heater';
import { CoffeeMachine } from './coffee-machine';
import { Kettle } from './_kettle';
import { ProfessionalCoffeeMachine } from './professional-coffee-machine';
import { ICoffeeWaterHeater } from './abstractions/i-coffee-water-heater';
import { useHeater } from './function-use-heater';

class House {
    public constructor(public readonly name: string) {}

    public heatWater(heater: IWaterHeater): void {
        heater.turnOn();
        heater.setTemperature(45);
        heater.heatWater();
    }

    public waterResidue(heater: ICoffeeWaterHeater): void {
        heater.waterResidue();
    }
}

const house = new House('My Sweet Home');
const kettle = new Kettle('Kitchen Kettle');
const coffeeMachine = new CoffeeMachine('Kitchen Coffee Master');
const electricWaterHeater = new ProfessionalCoffeeMachine('Electric Water Heater');

console.log('--- Kettle ---');
house.heatWater(kettle);

console.log('--- Coffee Machine ---');
house.heatWater(coffeeMachine);

console.log('--- Professional Coffee Machine ---');
electricWaterHeater.waterRelayState = true;
house.heatWater(electricWaterHeater);
house.waterResidue(electricWaterHeater);


useHeater(kettle);
kettle.pour();

useHeater(electricWaterHeater);
electricWaterHeater.waterResidue();
