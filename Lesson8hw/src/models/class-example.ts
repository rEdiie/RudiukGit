export class ApiObject {
    public id?: number;
    public name?: string;
    public username?: string;
    public email?: string;
    public address?: ApiObjectAddressDto | null;
    public phone?: string;
    public website?: string;
    public company?: ApiObjectCompanyDto | null;

    public constructor(row: Record<string, unknown>) {
        this.id = row['id'] as number;
        this.name = row['name'] as string;
        this.username = row['username'] as string;
        this.email = row['email'] as string;
        this.address = new ApiObjectAddressDto(row['address'] as Record<string, unknown>);
        this.phone = row['phone'] as string;
        this.website = row['website'] as string;
        this.company = new ApiObjectCompanyDto(row['company'] as Record<string, unknown>);
    }
}

class ApiObjectAddressDto {
    public street?: string;
    public suite?: string;
    public city?: string;
    public zipcode?: string;
    public geo?: ApiObjectGeoDto;

    public constructor(row: Record<string, unknown>) {
        this.street = row['street'] as string;
        this.suite = row['suite'] as string;
        this.city = row['city'] as string;
        this.zipcode = row['zipcode'] as string;
        this.geo = new ApiObjectGeoDto(row['geo'] as Record<string, unknown>);
    }
}

class ApiObjectGeoDto {
    public lat?: string;
    public lng?: string;

    public constructor(row: Record<string, unknown>) {
        this.lat = row['lat'] as string;
        this.lng = row['lng'] as string;
    }
}

class ApiObjectCompanyDto {
    public name?: string;
    public catchPhrase?: string;
    public bs?: string;

    public constructor(row: Record<string, unknown>) {
        this.name = row['name'] as string;
        this.catchPhrase = row['catchPhrase'] as string;
        this.bs = row['bs'] as string;
    }
}
export class UserSummary {
    public id: number;
    public name: string;
    public city: string;
    public fullAddress: string;

    public constructor(user: ApiObject) {
        this.id = user.id ?? 0;
        this.name = user.name ?? 'Unknown';
        this.city = user.address?.city ?? 'Unknown';
        this.fullAddress = user.address ? `${user.address.street ?? ''}, ${user.address.suite ?? ''}, ${user.address.city ?? ''}` : 'Unknown';
    }
}
