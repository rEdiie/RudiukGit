export abstract class Entity {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public abstract describe(): string;
}

export class CityEntity extends Entity {
    public city: string;

    public constructor(id: number, name: string, city: string) {
        super(id, name);
        this.city = city;
    }
    public describe(): string {
        return `Entity ${this.name} with city ${this.city}`;
    }
}

export class DetailedEntity {
    public entity: Entity;
    public extraInfo: string;

    public constructor(entity: Entity, extra: string) {
        this.entity = entity;
        this.extraInfo = extra;
    }

    public fullDescription(): string {
        return `${this.entity.describe()} + extra: ${this.extraInfo}`;
    }
}
