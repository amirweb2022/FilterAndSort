import React, { Component } from 'react';
import Product from '../Product/Product';
class ProductList extends Component {
    render() {
        const { remove, inceement, change, decremnet, products } = this.props;
        return (
            <div>
                {products.length === 0 ? <div className='empty'>Go To Shoping</div> : null}
                {products.map(product => {
                    return (
                        <Product product={product} key={product.id} onDelete={() => remove(product.id)}
                            onIncrement={() => inceement(product.id)}
                            onChange={(e) => change(e, product.id)}
                            onDecrement={() => decremnet(product.id)} />
                    )
                })}
            </div>
        )
    }
}
export default ProductList;