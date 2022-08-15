import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    console.log(cartData)
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.warn(amount)
    return (<div>
        <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">

            {
                cartData.map((item) => {
                    return <div class="container" >
                        <div class="row"  >
                            <div class="col" >
                                <img src={item.photo} />
                            </div>
                            <div class="col" style={{ border: "2px solid grey", textAlign: "center" }}>
                                <div style={{ fontSize: "35px" }}>

                                    <div>Name : {item.name} </div>


                                    <div>Category : {item.category} </div>
                                    <div>Brand : {item.brand} </div>
                                    <div>Color : {item.color} </div>
                                    <div style={{ border: "2px solid black", backgroundColor: "black", color: "white", width: "200px", textAlign: "center", display: "flex", margin: "auto" }}>Price : {item.price} </div>
                                </div>


                            </div>
                            <div className="price-details" style={{ textAlign: "left", margin: "2rem", padding: "0.5rem", fontSize: "20px", backgroundColor: "pink", color: "blue" }}>
                                <div className="adjust-price"><span>Amount</span><span>..........................................................................................................................................................................................................................................................................................{amount}</span></div>
                                <div className="adjust-price"><span>Discount</span><span>...........................................................................................................................................................................................................................................................................................{amount / 10}</span></div>
                                <div className="adjust-price"><span>Tax</span><span>...........................................................................................................................................................................................................................................................................................................000</span></div>
                                <div className="adjust-price"><span>Total</span><span>...................................................................................................................................................................................................................................................................................................{amount - (amount / 10)}</span></div>

                            </div>
                        </div>
                    </div>

                })
            }

        </div>
    </div>)
}

export default Cart;