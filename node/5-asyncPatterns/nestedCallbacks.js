const fs = require("fs");

// promisifying the readFile function manually
const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};

// here also we need to nest the calls to make it asynchronous
getText("./text1.txt")
    .then((data) => {
        console.log(data);
        getText("./text2.txt")
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
