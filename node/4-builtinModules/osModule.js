// os module
const os = require("os");

// get info about the user
console.log(os.userInfo());

// get the system uptime
console.log(os.uptime() + " seconds");

// get useful info about the os
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(currentOs);
