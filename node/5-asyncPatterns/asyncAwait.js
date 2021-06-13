const fs = require("fs");
const util = require("util");

// util function to promisify a function
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

// we can also promisify like this
// const fs = require("fs").promises;
// and then use fs.readFile and fs.writeFile as promises

// async function
// nesting not required
const readText = async () => {
    try {
        // awynchronously wait for the promises to get resolved
        const first = await readFilePromise("./text1.txt", "utf8");
        const second = await readFilePromise("./text2.txt", "utf8");

        // asynchronously write to a file
        await writeFilePromise("./write.txt", "Hello, this is written");

        // asynchronously edit a file
        await writeFilePromise("./write.txt", "\nHello, this is appended", {
            flag: "a",
        });

        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }
};

// run the async function
readText();
