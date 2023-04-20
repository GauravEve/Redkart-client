import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as actionCreators from '../store/actions/index'


function CartSave() {

  const [cartSaveItems,setCartSaveItems]=useState([])
  var cartSave=useSelector((state)=>state.cartSave)
  const dispatch=useDispatch();

  useEffect(()=>{
    const fetchdata=async()=>{
    await dispatch(actionCreators.loadCartSaves())
    }
    fetchdata();
  },[]);

useEffect(()=>{
  if(cartSave)
  setCartSaveItems(cartSave)
},[cartSave])

  const addToCartHandler=(ele)=>{
  dispatch(actionCreators.addToCart(ele))
  }

    const a=[];
    var quantity=0;
    cartSaveItems.map((ele,index)=>{
      a.push(
      <div className='cartProduct'>
          <img key={index} className="productImage" src={ele.image}/>
          <div className='cartDescription'>
            <p>{ele.description}</p>
            <p>Rs {ele.price}</p>
            <button className='handlerBtn' onClick={()=>addToCartHandler(ele)}>Add to Cart</button>
          </div>
        </div>)
        quantity=quantity+ele.quantity
        
      })

  return (
    <div>
        {(a.length>0)&&<h1>Save for Later ({quantity})</h1>}
        {a}
    </div>
  )
}

export default CartSave