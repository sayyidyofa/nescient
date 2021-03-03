export default interface ElasticResponse {
    took: number,
    timed_out: boolean,
    _shards: {
        total: number,
        successful: number,
        skipped: number,
        failed: number
    },
    hits: {
        total: {
            value: number,
            relation: string
        },
        max_score: number,
        hits: [
            {
                _index: string,
                _type: "_doc",
                _id: string,
                _score: number,
                _source: {
                    netflow: {
                        destination_ipv4_address: string,
                        protocol_identifier: number,
                        packet_delta_count: number,
                        source_ipv4_address: string,
                        exporter: {
                            timestamp: string
                        },
                        flow_start_sys_up_time: number,
                        flow_end_sys_up_time: number,
                        destination_transport_port: number,
                        source_transport_port: number
                    },
                    "@timestamp": string
                }
            }
        ]
    }
}
