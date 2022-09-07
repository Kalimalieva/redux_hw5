import React from 'react';
import {Link} from "react-router-dom";
import BasketList from "./basket/BasketList";


function Nav(props) {
    return (
        <div >
            <nav class="d-flex p-2 bd-highlight" class="d-flex justify-content-between">
                <Link to="/">Main Page</Link>&nbsp; &nbsp; &nbsp;
                <Link to="/about">Lorem Page</Link>&nbsp; &nbsp; &nbsp;
                <Link to="/contact">Contact Page</Link>&nbsp; &nbsp; &nbsp;
                <Link to="/text">Text Page</Link>
                <Link to="/user">User Page</Link>
                <BasketList/>
            </nav>
        </div>
    );
}

export default Nav;