import React from "react";

function UserAddForm() {
    return(
        <div className="userAddForm">
            <label>nume</label>
            <input type="text" />
            <br/>
            <label>email</label>
            <input type="email" />
        </div>
    )
}

export default UserAddForm;