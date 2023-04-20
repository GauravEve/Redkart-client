import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import '../css/GridComponent.css'
import '../css/pagination.css'
import * as actionCreators from '../store/actions/index'
import {useDispatch, useSelector} from 'react-redux';


function GridComponent(){
  
  const [currentPage,setCurrentPage]=useState(1);
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.filterList)
 
   useEffect(()=>{
    dispatch(actionCreators.loadProducts(currentPage));
    // dispatch(actionCreators.remove())
  },[currentPage])


  function handlePageClick({selected:selectedPage}){
      console.log("selectedPage",selectedPage);
      setCurrentPage(selectedPage+1)
  }

  const onClick= (ele)=>{
      dispatch(actionCreators.addToCart(ele)) 
  }
    const a=[];

    products.map((ele,index)=>{
      a.push(
        
        <div className="productContainer">
            <img className='productImg' key={index} src={ele.image}/>
            <p>{ele.description}</p>
            <p>Rs {ele.price}</p>
            <button className="addToCartBtn" onClick={()=>onClick(ele)}>Add to cart</button>
        </div>)
        })

  return (
  <div>
      
    <div className='GridContainer'>
      {a.length>0?
      a:
      (<div className='noProductsDiv'>
        <p className='noProducts'>No products found!!</p>
        <p>Kindly choose a different filter</p></div>)}
    </div>
    <div className='paginate'>
      
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      previousLinkClassName={'pagination__link'}
      nextLinkClassName={'pagination__link'}
      disabledClassName={'pagination__link--disabled'}
      activeClassName={'pagination__link--active'}/>

    </div>
  </div>
    
  )
}

export default (GridComponent)