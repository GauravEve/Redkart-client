import React, { useEffect } from 'react'
import "../css/form.css"
import * as actionCreators from '../store/actions/index'
import {useDispatch, useSelector} from 'react-redux';
import $ from 'jquery';

function Form() {
  const dispatch=useDispatch();
  var products=useSelector((state)=>state.products)

  useEffect(()=>{
    $('input[type=checkbox]').prop('checked',false);
    $('input[type=radio]').prop('checked',false);
  },[products])
  

  const type=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectType(sign))
    else
        dispatch(actionCreators.removeType(sign))

  }

  const brand=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectBrand(sign))
    else
        dispatch(actionCreators.removeBrand(sign))

  }

  const size=(e,sign)=>{
    if(e.target.checked)
        dispatch(actionCreators.selectSize(sign))
    else
        dispatch(actionCreators.removeSize(sign))

  }
  

  const sortFn=(ele)=>{
    dispatch(actionCreators.sortFn(ele))
  }

  const removeFn=()=>{
    dispatch(actionCreators.remove())
    
  }

  return (
    <div className="formContainer">
        <form id="form1"className='form'>
            <div className="ideal">
                <h5>Filters</h5>
                <h6>Ideal for:</h6>
                <label className='label'>
                <input type='checkbox' id="men" className="inputForm" name="men" onClick={(e)=>type(e,"men")}/>
                    Men</label>
                    <label className='label'>
                <input type='checkbox' className='inputForm' id="women" name="women" onClick={(e)=>type(e,"women")}/>
                    Women</label>
            </div>
            <div className="brand">
                <h6>Brand</h6>
                <label label className='label'>
                <input type='checkbox' id="nike" className="inputForm" name="nike" onClick={(e)=>brand(e,"nike")}/>
                    Nike</label>
                    <label label className='label'>
                <input type='checkbox' className='inputForm' id="casio" name="casio" onClick={(e)=>brand(e,"casio")}/>
                   Casio</label>
                   <label label className='label'>
                <input type='checkbox' className='inputForm' id="peterEngland" name="peterEngland" onClick={(e)=>brand(e,"peter england")}/>
                    Peter England</label>
            </div>
            <div className="sizes">
                <h6>Sizes</h6>
                <label label className='label'>
                <input type='checkbox' className="inputForm" id="S" name="S" onClick={(e)=>size(e,"S")}/>
                    S</label>
                    <label label className='label'>
                <input type='checkbox' className='inputForm' id="M" name="M" onClick={(e)=>size(e,"M")}/>
                   M</label>
                   <label label className='label'>
                <input type='checkbox' className='inputForm' id="L" name="L" onClick={(e)=>size(e,"L")}/>
                    L</label>
                    <label label className='label'>
                <input type='checkbox' className='inputForm' id="XL" name="XL" onClick={(e)=>size(e,"XL")}/>
                   XL</label>
            </div>
            <div className="sortby">
                <h5>Sort By:</h5>
                <label label className='label'>
                <input type='radio' id="lowToHigh" className="inputForm" name="lowToHigh" onClick={()=>sortFn("Inc")}/>
                    Price low to high</label>
                    <label label className='label'>
                <input type='radio' className='inputForm' id="highToLow" name="lowToHigh" onClick={()=>sortFn("Dec")}/>
                   Price high to low</label>
            </div>
            <input className="filterBtn" type='reset' value="Clear Filter" onClick={()=>removeFn()}></input>
        </form>
    </div>
  )
}

export default Form