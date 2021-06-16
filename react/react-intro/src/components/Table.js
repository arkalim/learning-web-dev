import React from "react";
import Columns from "./Columns";

// This component renders the table with the rows
function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
