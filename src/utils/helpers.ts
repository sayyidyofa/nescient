import config from "../config";
import {SlidingData} from "../types";

export function calculateVariance(data: SlidingData): number {
    const squaredDiffToMean = (dataPoint: number, meanValue: number) => (dataPoint - meanValue) ** 2;
    const mean = calculateMean(data);
    return (
        data.reduce(
            (previousValue, currentValue) =>
                squaredDiffToMean(previousValue, mean) + squaredDiffToMean(currentValue, mean)
        ) / ( config.windowSize - 1 )
    ) ** 0.5;
}

export function calculateMean(data: SlidingData): number {
    return data.reduce(
        (previousValue, currentValue) =>
            previousValue + currentValue
    ) / config.windowSize;
}
