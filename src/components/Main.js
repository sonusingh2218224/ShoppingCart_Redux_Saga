import { addToCart, emptyCart, EmptyToCart, RemoveToCart, removeToCart } from '../Redux/Action';
import { useDispatch } from 'react-redux'
import { ProductList, productList } from '../Redux/ProductAction';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in main component", data);

    useEffect(() => {
        dispatch(ProductList())
    }, [])
    return (
        <div>
            <div>
                <button onClick={() => dispatch(EmptyToCart())}>Empty Cart</button>
            </div>
            <div className='product-container row'>
                {
                    data.map((item) => <div className='product-item col'>
                        <img src={item.photo} alt="" />
                        <div>Name : {item.name} </div>
                        <div>Color : {item.color} </div>
                        <div>Price : {item.price} </div>
                        <div>Category : {item.category} </div>
                        <div>Brand : {item.brand} </div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                            <button onClick={() => dispatch(RemoveToCart(item.id))}>Remove to Cart</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Main;
