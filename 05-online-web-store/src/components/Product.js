import React from 'react';


const product = (props) => {
    return (
        <div className="product">
                <h3>{props.name}</h3>
                <img
                    height={100}
                    title={props.name}
                    alt={props.name}
                    src={`img/products/${props.image}`}
                    />
                <h3>${props.price}</h3>
            <button onClick={props.added}>Add to cart</button>
            <button onClick={props.removed}>Remove from cart</button>


        </div>
    )
};

export default product