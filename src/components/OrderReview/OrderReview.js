import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';


const OrderReview = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)

    const history = useHistory()

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder')
        setCart([]);
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}>
                    <Link>
                        <button onClick={handlePlaceOrder} className='btn btn-regular'>Place order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;