import React from 'react';


const product = (props) => {

    let removeButton, addButton
    let currentProductId = props.product.id
    if (props.cart.quantityById[currentProductId]) {
        removeButton = <button onClick={props.removed}>Remove from cart</button>
        addButton = <button onClick={props.added}>Add to cart ({props.cart.quantityById[currentProductId]})</button>
    }
    else {
        addButton = <button onClick={props.added}>Add to cart (0)</button>
        removeButton = ''
    }
    return (
        <div className="product">
            <h3>{props.product.name}</h3>
            <img
                height={100}
                title={props.product.name}
                alt={props.product.name}
                src={`img/products/${props.product.image}`}
            />
            <h3>${props.product.price}</h3>
            {addButton}
            {removeButton}


        </div>
    )
};

export default product