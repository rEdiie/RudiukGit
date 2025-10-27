import type { ApiObjectDto } from '../models/api-objects.dto';
import { ApiObject } from '../models/class-example';

export async function getApiObjectAddress(): Promise<ApiObjectDto[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json as ApiObjectDto[];
}

export async function getApiObjectAddressAsObjectWithClass(): Promise<ApiObject[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => new ApiObject(row));
}
