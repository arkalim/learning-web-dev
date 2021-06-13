const fs = require("fs");

for (let i = 0; i < 10000; i++) {
    fs.writeFileSync("./text.txt", `Hello World ${i}\n`, { flag: "a" });
}
