import React from "react";

// import the external CSS
import "./myStyles.css";

// inline CSS (notice the camelCase compared to kebab-case in CSS)
const heading = {
    color: "blue",
    fontFamily: "Arial",
};

function Stylesheet(props) {
    // create a local variable secondary which equals "secondary"
    // if the props.secondary == true, else ""
    let secondary = props.secondary ? "secondary" : "";
    return (
        <div>
            {/* add inline CSS to the JSX tag */}
            <h1 style={heading}>Inline Stylesheets</h1>

            {/* add the CSS class to the JSX tag */}
            <h1 className="primary">External Stylesheets</h1>

            {/* conditionally add the CSS class secondary to the JSX tag */}
            <h1 className={secondary}>Conditional Stylesheets</h1>

            {/* add multiple CSS classes to the JSX tag */}
            <h1 className={`${secondary} font-XL`}>Multiple Stylesheets</h1>
        </div>
    );
}

export default Stylesheet;
