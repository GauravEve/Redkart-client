import axios from 'axios'

export function loadProducts(currentPage){
    return async (dispatch)=>{
        return await axios.get(`https://redkart1.up.railway.app/getProducts?page=${currentPage}`).then((response)=>{
            console.log(response);
            dispatch(loadProduct(response.data))
        })
    }
}

// export const getProducts = createAsyncThunk(
//     "get/getProducts",
//     async () => {
//      return fetch(
//         `http://localhost:5000/getProducts?page=${currentPage}`
//       ).then(res=>res.json());
//       // console.log(products)
      
//     }
// )

// export function loadProductss(currentPage){
//     return async ()=>{
//         return await axios.get(`http://localhost:5000/getProducts?page=${currentPage}`).then((res)=>{
//             res.json(res.data)
//         })
//     }
// }



export function loadProduct(response){
    return{
        type:"LOAD_PRODUCT",
        payload:response
    }
}

export function loadCarts(){
    return async (dispatch)=>{
        return await axios.get("https://redkart1.up.railway.app/getCart").then((response)=>{
            // console.log(response);
            dispatch(loadCart(response.data))
        })
    }
}

export function loadCart(response){
    return{
        type:"LOAD_CART",
        payload:response
    }
}

export function loadCartSaves(){
    return async (dispatch)=>{
        return await axios.get("https://redkart1.up.railway.app/getCartSave").then((response)=>{
            // console.log(response);
            dispatch(loadCartSave(response.data))
        })
    }
}

export function loadCartSave(response){
    return{
        type:"LOAD_CART_SAVE",
        payload:response
    }
}

export function cartHandler(ele){
    return async (dispatch)=>{
    console.log(ele);
        return await axios.post('https://redkart1.up.railway.app/cartHandler',{id:ele.id,sign:ele.sign})
        .then((res)=>{
        console.log('Item Incremented');
        // alert("Product added to cart successful");
        // dispatch(loadCarts())
        res.status(201).send({message:"Added successfully"})
        
      }
      )
      .catch(err=>{
        console.log("Unable to add");
      })
    }
}

export function cartSave(ele){
    return async (dispatch)=>{
    console.log(ele);
        return await axios.post('https://redkart1.up.railway.app/cartSave',ele)
        .then((res)=>{
        console.log('Item Incremented');
        dispatch(loadCartSaves())
        dispatch(loadCarts())
        res.status(201).send({message:"Added successfully"})
        
      }
      )
      .catch(err=>{
        console.log("Unable to add");
      })
    }
}

export function addToCart(ele){
    return async (dispatch)=>{
    console.log(ele);
        return await axios.post('https://redkart1.up.railway.app/cart',ele)
        .then((res)=>{
        console.log('Item added to cart');
        dispatch(loadCarts())
        dispatch(loadCartSaves())
        alert("Product added to cart successful");
        res.status(201).send({message:"Added successfully"})
        
      }
      )
      .catch(err=>{
        console.log("Unable to add");
      })
    }
}
export function selectType(ele){
    return{
        type:"SELECT_TYPE",
        payload:ele
    }
}
export function removeType(ele){
    return{
        type:"REMOVE_TYPE",
        payload:ele
    }
}
export function removeBrand(ele){
    return{
        type:"REMOVE_BRAND",
        payload:ele
    }
}
export function removeSize(ele){
    return{
        type:"REMOVE_SIZE",
        payload:ele
    }
}

export function selectBrand(ele){
    return{
        type:"SELECT_BRAND",
        payload:ele
    }
}

export function selectSize(ele){
    return{
        type:"SELECT_SIZE",
        payload:ele
    }
}

export function sortFn(ele){
    console.log("called",ele);
    return{
        type:"SORT",
        payload:ele
    }
}

export function search(ele){
    return{
        type:"SEARCH",
        payload:ele
    }
}

export function remove(){
    
    return{
        type:"REMOVE"
    }
}




