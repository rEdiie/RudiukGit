import { useHeater } from '../../src/function-use-heater';
import { ProfessionalCoffeeMachine } from '../../src/professional-coffee-machine';
import { Kettle } from '../../src/kettle';
import { IHeatable } from '../../src/abstractions/i-heatable';

describe('useHeater() (Jest)', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should log device info for any IHeatable device', () => {
        const kettle = new Kettle('JestKettle');
        useHeater(kettle);

        expect(consoleSpy).toHaveBeenCalledWith('------ Info about device ------');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('JestKettle'));
    });

    it('should call waterResidue() only for ProfessionalCoffeeMachine', () => {
        const machine = new ProfessionalCoffeeMachine('JestPro');
        const residueSpy = jest.spyOn(machine, 'waterResidue');
        useHeater(machine);
        expect(residueSpy).toHaveBeenCalled();
    });

    it('should NOT call waterResidue() for regular IHeatable', () => {
        const fakeHeater: IHeatable = {
            getInfo: () => 'Fake heater info',
            heatWater: () => undefined
        };
        useHeater(fakeHeater);
        expect(consoleSpy).toHaveBeenCalledTimes(2);
    });
});
