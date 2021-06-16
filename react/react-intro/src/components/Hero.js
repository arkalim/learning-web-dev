import React from "react";

function Hero({ heroName }) {
    // if the heroName is Joker, throw an error
    if (heroName === "Joker") {
        throw new Error("Not a hero!");
    }
    return <div>{heroName}</div>;
}

export default Hero;
