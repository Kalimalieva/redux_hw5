import React from 'react';
import {Link} from "react-router-dom";
import BasketList from "./basket/BasketList";

function Nav(props) {
    return (
        <div>
            <nav>
            <Link to="/">Main Page</Link>&nbsp; &nbsp; &nbsp;
            <Link to="/about">Lorem Page</Link>
            <BasketList/>
            </nav>
        </div>
    );
}

export default Nav;