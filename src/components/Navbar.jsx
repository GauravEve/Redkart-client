import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as actionCreators from '../store/actions/index'
import {useDispatch, useSelector} from 'react-redux';
import '../css/navbar.css'

function Navbar() {
  const dispatch=useDispatch();
  const carts=useSelector((state)=>state.carts)
  const [cartsQuantity,setCartsQuantity]=useState(0)
  useEffect(()=>{
    dispatch(actionCreators.loadCarts())
  },[])

  useEffect(()=>{
    setCartsQuantity(quantity)
  },[carts])

let quantity=0;
carts?.map(ele=>{
  quantity=quantity+ele.quantity
})

  return (
    <nav className="gridTopContainer">
          <div className="container">
            <a href="/">
            <div className="flipkart_explore_plus">
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" className='img' />
                <p className="p">Explore <span class="font-bold text-warning">Plus</span></p>
            </div>
            </a>
            <input className='input' type="search" placeholder="Search for products, brands and more" onChange={(e)=>dispatch(actionCreators.search(e.target.value))}></input>
          </div>
          <div className="gridContainer" >
            <button className='loginBtn' >Login</button>
            <button className='moreBtn'>More</button>
            <div className='cartBtnContainer'>
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>
            <Link to='/cart'  className="cartBtn">Cart </Link><p className='cartNumber'>{cartsQuantity}</p>
            </div>
          </div>
        </nav>

  )
}

export default Navbar