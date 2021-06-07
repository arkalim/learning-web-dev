// file system module
const fs = require("fs");

// --------------- Synchronous -----------------
// blocking approach - execution occurrs synchrononously
// so if any read or write operation takes time, the the cpu has to wait

// read a file synchronoously (encoding is important)
const textfile = fs.readFileSync("./text.txt", "utf-8");
console.log(textfile);

// write to a file synchronoously
// if the file isn't present, a new file will be created,
// else the original file will be overwritten
fs.writeFileSync("./write.txt", "Hello, this is written");

// append to the end of the file synchronoously
fs.writeFileSync("./write.txt", "\nHello, this is appended", { flag: "a" });

// -------------- Asynchronous -----------------
// non-blocking approach, uses callback functions
// the code after the callback hell will be executed
// while the file operations are handled asynchronoously
// This approach is messy, so the alternatives are: promises and async-await

fs.readFile("./text.txt", "utf-8", (error, result) => {
    if (error) {
        console.log(error);
        return;
    }

    // write to a file
    fs.writeFile("./write.txt", "Hello, this is written", (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        // append to the end of the file
        fs.writeFileSync(
            "./write.txt",
            "\nHello, this is appended",
            { flag: "a" },
            (error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }
            }
        );
    });
});
