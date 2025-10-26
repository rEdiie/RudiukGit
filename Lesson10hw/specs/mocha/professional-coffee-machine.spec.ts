import { expect } from 'chai';
import sinon from 'sinon';
import { ProfessionalCoffeeMachine } from '../../src/professional-coffee-machine';

describe('ProfessionalCoffeeMachine (Mocha + Chai + Sinon)', () => {
    let machine: ProfessionalCoffeeMachine;
    let consoleSpy: sinon.SinonSpy;

    beforeEach(() => {
        machine = new ProfessionalCoffeeMachine('ProCoffee');
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should initialize with correct defaults', () => {
        expect(machine.waterRelayState).to.be.false;
        expect(machine.waterLevel).to.equal(500);
    });

    it('should log a message when heatWater() is called and power is off', () => {
        machine.heatWater();
        expect(consoleSpy.called).to.be.true;
        expect(consoleSpy.firstCall.args[0]).to.include('is not on');
    });

    it('should reduce water level when making coffee via waterResidue()', () => {
        const initialLevel = machine.waterLevel;
        machine.waterResidue();
        expect(machine.waterLevel).to.be.lessThan(initialLevel);
    });

    it('should return correct info string', () => {
        const info = machine.getInfo();
        expect(info).to.include('Coffee Machine');
        expect(info).to.include('desired temp');
    });
});
