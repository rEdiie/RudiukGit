import { describe, it, expect } from 'vitest';
import sinon from 'sinon';
import { CityEntity, DetailedEntity } from '../../abstraction';

describe('CityEntity', () => {
    it('describe (spy)', () => {
        const city = new CityEntity(1, 'Anna', 'Kyiv');
        const spy = sinon.spy(city, 'describe');

        city.describe();

        expect(spy.calledOnce).toBe(true);
        spy.restore();
    });
});

describe('DetailedEntity', () => {
    it('describe (stub)', () => {
        const city = new CityEntity(2, 'Bob', 'Lviv');
        const stub = sinon.stub(city, 'describe').returns('Entity Mocked');

        const detailed = new DetailedEntity(city, 'Extra Info');
        const result = detailed.fullDescription();

        expect(result).toBe('Entity Mocked + extra: Extra Info');
        expect(stub.calledOnce).toBe(true);
        stub.restore();
    });
});
