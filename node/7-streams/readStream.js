const fs = require("fs");

// create a read stream object with the chunk size as 1kB and encoding at utf8
const readStream = fs.createReadStream("./text.txt", {
    highWaterMark: 1000,
    encoding: "utf8",
});

// listen for data event
readStream.on("data", (result) => {
    console.log(result);
});

// listen for error event
readStream.on("error", (err) => console.log(err));
