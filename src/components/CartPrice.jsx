import {useSelector} from 'react-redux';

function CartPrice() {

  var products=useSelector((state)=>state.carts)
    
    var totalcost=0;
    products?.map((ele)=>{
        totalcost=totalcost+ele.quantity*ele.price;
    })
  return (
    <div className='cartPrice'>
      <div className='priceContainer'>
        <h2 className='textDecoration'>Order Details</h2><br/>
        <h6>Price: Rs {totalcost}</h6>
        <h6>Delivery Fee: Free</h6>
        <h6>Discount: No</h6>
        <h6 className='boldClass'>Total Amount: Rs {totalcost}</h6>
      </div>
    </div>
  )
}

export default CartPrice