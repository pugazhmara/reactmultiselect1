import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product =>(
                        <li key={product.productId}>
                            <div className="cart">
                            
                            <div className="product">
                                <a href={"#" +product.productId}>
                                    <img src={product.searchImage} alt={product.title}></img>
                                </a>
                                <div className="product-price">
                                    ProductName:{product.productName}<br></br>
                                    Category:{product.category}<br></br>
                                    MRP:{product.mrp}<br></br>
                                    Price:{product.price}
                                </div>
                                <button className="button primary">Add to cart</button>
                            </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
            
        )
    }
}
