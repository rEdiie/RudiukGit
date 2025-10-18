import { ApiObject, ApiObjectDto, UserSummary } from './models/index';
import { CityEntity, DetailedEntity } from './abstraction';

async function getApiObjectAddress(): Promise<ApiObjectDto[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json as ApiObjectDto[];
}
async function getApiObjectAddressAsObjectWithClass(): Promise<ApiObject[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return (json as Record<string, unknown>[]).map((row) => new ApiObject(row));
}

function getUserSummaryFromArray(user: ApiObject): UserSummary {
    return new UserSummary(user);
}

(async () => {
    const apiObjects = await getApiObjectAddress();
    const notNullApiObjects = apiObjects.filter((apiObject) => apiObject.address !== null);
    console.log(JSON.stringify(notNullApiObjects, null, 2));

    const apiObjectsWithClass = await getApiObjectAddressAsObjectWithClass();
    const filteredObjects = apiObjectsWithClass.filter((apiObject) => apiObject.address !== null);
    console.log(JSON.stringify(filteredObjects, null, 2));

    const summaries = apiObjectsWithClass.map(u => getUserSummaryFromArray(u));
    console.log(JSON.stringify(summaries, null, 2));
})();

const cityEntity = new CityEntity(1, 'Anna', 'Kyiv');
console.log('=== CityEntity ===');
console.log(cityEntity.describe());

const detailed = new DetailedEntity(cityEntity, 'Some extra information');
console.log('=== DetailedEntity ===');
console.log(detailed.fullDescription());
