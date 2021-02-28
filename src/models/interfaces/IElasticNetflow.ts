import { Document } from "mongoose";

export default interface IElasticNetflow extends Document {
    _index: string,
    _score: number,
    _source: {
        "@timestamp": string,
        agent: {
            ephemeral_id: string,
            hostname: string,
            id: string,
            name: string,
            type: string,
            version: string
        },
        destination: {
            ip: string,
            locality: string,
            port: number
        },
        ecs: {
            version: string
        },
        event: {
            action: string,
            category: [string],
            created: string,
            dataset: string,
            duration: number,
            end: string,
            ingested: string,
            kind: string,
            module: string,
            start: string,
            type: [string]
        },
        fileset: {
            name: string
        },
        flow: {
            id: string,
            locality: string
        },
        input: {
            type: string
        },
        netflow: {
            application_id: [string],
            bgp_destination_as_number: number,
            bgp_source_as_number: number,
            destination_ipv4_address: string,
            destination_transport_port: number,
            egress_interface: number,
            exporter: {
                address: string,
                source_id: number,
                timestamp: string,
                uptime_millis: number,
                version: number
            },
            flow_start_sys_up_time: number,
            flow_end_sys_up_time: number,
            ingress_interface: number,
            ip_class_of_service: number,
            octet_delta_count: number,
            packet_delta_count: number,
            protocol_identifier: number,
            source_ipv4_address: string,
            source_transport_port: number,
            type: string
        },
        network: {
            bytes: number,
            community_id: string,
            direction: string,
            iana_number: number,
            packets: number,
            transport: string
        },
        observer: {
            ip: string
        },
        related: {
            ip: [string]
        },
        service: {
            type: string
        },
        source: {
            bytes: number,
            ip: string,
            locality: string,
            packets: number,
            port: number
        },
        tags: [string]
    },
    _type: string
}
