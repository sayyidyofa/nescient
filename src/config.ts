export default {
    elasticsearchUrl: process.env.ELASTICSEARCH_URL ?? "http://localhost:9200",
    windowSize: 100,
    samplingInterval: 3
}
