// middleware to log the request method, url and time
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    console.log(method, url, time);

    // we either need to call the next() to send the middleware
    // to the next app.get() or do or do res.send() to terminate the middleware
    next();
};

module.exports = logger;
