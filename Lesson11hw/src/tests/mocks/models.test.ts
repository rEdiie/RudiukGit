import { describe, it, expect } from 'vitest';
import { ApiObject, UserSummary } from '../../models/class-example';
import { mockUser } from '../mocks/mock-data';

describe('ApiObject', () => {
    it('creates an object from API data', () => {
        const apiObject = new ApiObject(mockUser as unknown as Record<string, unknown>);

        expect(apiObject.id).toBe(1);
        expect(apiObject.name).toBe('Leanne Graham');
        expect(apiObject.address?.city).toBe('Gwenborough');
        expect(apiObject.company?.name).toBe('Romaguera-Crona');
    });

    it('checks embedded geo-data', () => {
        const apiObject = new ApiObject(mockUser as unknown as Record<string, unknown>);
        expect(apiObject.address?.geo?.lat).toBe('-37.3159');
        expect(apiObject.address?.geo?.lng).toBe('81.1496');
    });
});

describe('UserSummary', () => {
    it('creates a short description of the user', () => {
        const user = new ApiObject(mockUser as unknown as Record<string, unknown>);
        const summary = new UserSummary(user);

        expect(summary.id).toBe(1);
        expect(summary.name).toBe('Leanne Graham');
        expect(summary.city).toBe('Gwenborough');
        expect(summary.fullAddress).toContain('Kulas Light');
        expect(summary.fullAddress).toContain('Apt. 556');
    });
});
