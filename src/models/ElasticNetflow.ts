import { model, Schema } from "mongoose";
import IElasticNetflow from "./interfaces/IElasticNetflow";

const ElasticNetflowSchema = new Schema({
    _index: String,
    _score: Number,
    _source: {
        "@timestamp": String,
        agent: {
            ephemeral_id: String,
            hostname: String,
            id: String,
            name: String,
            type: String,
            version: String
        },
        destination: {
            ip: String,
            locality: String,
            port: Number
        },
        ecs: {
            version: String
        },
        event: {
            action: String,
            category: [String],
            created: String,
            dataset: String,
            duration: Number,
            end: String,
            ingested: String,
            kind: String,
            module: String,
            start: String,
            type: [String]
        },
        fileset: {
            name: String
        },
        flow: {
            id: String,
            locality: String
        },
        input: {
            type: String
        },
        netflow: {
            application_id: [String],
            bgp_destination_as_number: Number,
            bgp_source_as_number: Number,
            destination_ipv4_address: String,
            destination_transport_port: Number,
            egress_interface: Number,
            exporter: {
                address: String,
                source_id: Number,
                timestamp: String,
                uptime_millis: Number,
                version: Number
            },
            flow_start_sys_up_time: Number,
            flow_end_sys_up_time: Number,
            ingress_interface: Number,
            ip_class_of_service: Number,
            octet_delta_count: Number,
            packet_delta_count: Number,
            protocol_identifier: Number,
            source_ipv4_address: String,
            source_transport_port: Number,
            type: String
        },
        network: {
            bytes: Number,
            community_id: String,
            direction: String,
            iana_number: Number,
            packets: Number,
            transport: String
        },
        observer: {
            ip: String
        },
        related: {
            ip: [String]
        },
        service: {
            type: String
        },
        source: {
            bytes: Number,
            ip: String,
            locality: String,
            packets: Number,
            port: Number
        },
        tags: [String]
    },
    _type: String
}, {
    collection: "gns"
});

export default model<IElasticNetflow>('ElasticNetflowModel', ElasticNetflowSchema);
