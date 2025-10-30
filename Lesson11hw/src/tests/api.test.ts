import { describe, it, expect, vi } from 'vitest';
import { getApiObjectAddress, getApiObjectAddressAsObjectWithClass } from '../services/api';

describe('API layer (fetch mocks)', () => {
    it('getApiObjectAddress', async () => {
        const mockResponse = [
            { id: 10, name: 'Test', username: 'User', email: 't@e.com', address: null, phone: '', website: '', company: null }
        ];

        const fetchMock = vi.fn(() =>
            Promise.resolve({ json: () => Promise.resolve(mockResponse) })
        ) as unknown as typeof fetch;

        vi.stubGlobal('fetch', fetchMock);

        const users = await getApiObjectAddress();

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(users.length).toBe(1);
        expect(users[0].id).toBe(10);

        vi.unstubAllGlobals();
    });

    it('getApiObjectAddressAsObjectWithClass', async () => {
        const mockResponse = [
            { id: 5, name: 'Kate', username: 'k', email: 'k@e.com', address: { city: 'Rivne', street: '', suite: '', zipcode: '', geo: {lat:'0', lng:'0'} }, phone: '', website: '', company: {name:'C', catchPhrase:'', bs:''} }
        ];

        const fetchMock = vi.fn(() =>
            Promise.resolve({ json: () => Promise.resolve(mockResponse) })
        ) as unknown as typeof fetch;

        vi.stubGlobal('fetch', fetchMock);

        const arr = await getApiObjectAddressAsObjectWithClass();

        expect(arr.length).toBe(1);
        expect(arr[0].name).toBe('Kate');
        expect(arr[0].address?.city).toBe('Rivne');

        vi.unstubAllGlobals();
    });
});
