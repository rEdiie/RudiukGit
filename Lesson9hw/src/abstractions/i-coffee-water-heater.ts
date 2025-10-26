export interface ICoffeeWaterHeater {
    waterRelayState: boolean;
    waterLevel: number;

    heatWater(): void;
    waterResidue(): void
}
