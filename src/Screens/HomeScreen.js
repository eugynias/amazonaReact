import React from "react";
import data from '../data.js';

function HomeScreeen (props){
    return (
        <>
        <ul class="products">
                {
                    data.products.map(product =>

                    <li>
                            <div class="product">
                                <img class="product-image" src={product.image} alt="product" />
                                <div class="product-name">
                                    <a href="product.html">{product.name}</a>
                                </div>
                                <div class="product-brand">{product.brand}</div>
                                <div class="product-price">{product.price}</div>
                                <div class="product-rating">{product.rating} Stars {product.numRewis}</div>
                            </div>
                        </li>
                    )
                }
        </ul>
        </>
    )
}

export default HomeScreeen;