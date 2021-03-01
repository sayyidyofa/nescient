import mongoose from "mongoose";
import ElasticNetflowModel from "./models/ElasticNetflow";
import IElasticNetflow from "./models/interfaces/IElasticNetflow";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://username:password@127.0.0.1:27017/dataset?authSource=admin";

mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.log('Failed when connecting to MongoDB')
        console.warn(err)
    })

ElasticNetflowModel.find().limit(100).then(flows => {
    let packets = 0;
    flows.forEach((flow, idx) => {
        console.log(`[${idx}] ${flow._source.network.packets} packets`);
        packets = Number.isNaN(flow._source.network.packets) && flow._source.network.packets === undefined ? packets : packets + flow._source.network.packets
    });
    console.log(packets);
}).catch(console.log).finally(process.exit)
