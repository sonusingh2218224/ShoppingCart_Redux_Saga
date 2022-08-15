import React from 'react'
import "../App.css"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

function Header() {
    const result = useSelector((state) => state.cartData)
    console.warn("data in header", result)
    return (
        <div className='header'>
            <div className='cart-div'>
                <span>{result.length}</span>
                <Link to="/cart" >    <img src='./1.png' alt='' />

                </Link>


            </div>

        </div>
    )
}

export default Header