import { describe, it, expect } from 'vitest';
import { Kettle } from '../../src/kettle';

describe('Kettle (Vitest)', () => {
    it('should create kettle with correct defaults', () => {
        const kettle = new Kettle('VitestKettle');
        expect(kettle.desiredTemperature).toBe(100);
        expect(kettle.currentTemperature).toBe(18);
    });

    it('should print message when turned on and heated', () => {
        const kettle = new Kettle('VitestKettle');
        kettle.turnOn();
        expect(() => kettle.heatWater()).not.toThrow();
    });

    it('should call pour() without throwing an error', () => {
        const kettle = new Kettle('VitestKettle');
        expect(() => kettle.pour()).not.toThrow();
    });
});
