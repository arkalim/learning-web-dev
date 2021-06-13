const express = require("express");
const app = express();
const { products } = require("./data");

// resource for home page
app.get("/", (req, res) => {
    // redirect the user to /api/products
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

// set the resource for /api/products
// return only the id, name and image in the product list
app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });

    res.json(newProducts);
});

// if the user opens any product, return all the info about that product
// productID is the route parameter
app.get("/api/products/:productID", (req, res) => {
    // productID can be accessed using req.params
    // by default, productID will be a string
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    // if the product doesn't exist, send status 404
    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist");
    }

    return res.json(singleProduct);
});

// route prarameters for getting specific reviews of a particular product
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    const { productID, reviewID } = req.params;
    return res.send(`Review ${reviewID} of Product ${productID}`);
});

// query string parameters (url parameters)
// these allow us to send query information to the server
app.get("/api/v1/query", (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    // filter the products given the name
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    // return only the number of requested products
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // if no product matches the given query
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000....");
});
