import React from 'react';
import PropTypes from 'prop-types';
//import './Item.css POUR LE CSS

const Item = ({item, onAddToCart})=>(
    <div className="Item">
        {/********************* Bloc Left *********************/ }
        <div className="Item-left">
            <div className="Item-title">{item.name}</div>
            <div className="Item-desciption">{item.desciption}</div>
        </div>
        {/********************* Bloc Right *********************/ }
        <div className="Item-right">
            <div className="Item-price">{item.price}</div>
            <button className="Item-addToCart" onClick={onAddToCart} >Add To Cart</button>
        </div>
    </div>
)

Item.propTypes =  {
    item : PropTypes.object.isRequired,
    onAddToCart : PropTypes.func.isRequired
}
export default Item;