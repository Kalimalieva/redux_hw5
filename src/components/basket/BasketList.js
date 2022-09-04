import React from 'react';
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton';

function BasketList() {
    const basket = useSelector((state) => state.basket.value)
    return (
        <div>
            <DropdownButton id="dropdown-item-button" title="Корзина">
                {basket.map((product, index) => <BasketItem item={product} key={index}/>)}
            </DropdownButton>
        </div>
    );
}

export default BasketList;