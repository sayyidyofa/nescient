export default interface DynamicThresholdParams {
    windowSize: number,
    timeInterval: number,
    packetCount: number
    uniqueSrcIPCount: number,
    uniqueDstIPCount: number,
    uniqueProtocolCount: number
}
