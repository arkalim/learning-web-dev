const http = require("http");
const fs = require("fs");

// create a server
const server = http.createServer();

// set the emitter for the request event
server.on("request", (req, res) => {
    // create a read stream object with the chunk size as 1kB and encoding at utf8
    const readStream = fs.createReadStream("./text.txt", {
        highWaterMark: 1000,
        encoding: "utf8",
    });

    readStream.on("open", () => {
        // pipe the read stream into the res object
        readStream.pipe(res);
    });

    // listen for error event
    readStream.on("error", (err) => res.end(err));
});

server.listen(5000);
