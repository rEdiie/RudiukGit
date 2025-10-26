import { IHeatable } from './abstractions/i-heatable';
import { ProfessionalCoffeeMachine } from './professional-coffee-machine';

export function useHeater(device: IHeatable): void {
    console.log('------ Info about device ------');
    console.log(device.getInfo());

    if (device instanceof ProfessionalCoffeeMachine) {
        device.waterResidue();
    }
}
