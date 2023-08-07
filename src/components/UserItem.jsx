import React from "react";

function UserItem(props) {
    const { name, email, salary, image } = props;

    return(
        <div className="userItem">
            <p>{ name }</p>
            <p>{ email }</p>
            <p>{ salary }</p>
            <img src={ image } alt="temporary user card image" className="userImage"/>
        </div>
    );
}

export default UserItem;