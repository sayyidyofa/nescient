import { createSocket } from "dgram";

const netflowListener = createSocket("udp4");

netflowListener.on("error", err => {
    console.log(err);
    netflowListener.close();
});

netflowListener.on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

netflowListener.on("listening", () => {
    const address = netflowListener.address();
    console.log(`server is listening at ${address.address}:${address.port}`);
});

netflowListener.bind(2055);
