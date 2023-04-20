
let defaultState = {
    S: '',
    M: '',
    L: '',
    XL: '',
    men: '',
    women: '',
    nike: '',
    casio: '',
    peter: '',
    sort: '',
    type: [],
    brand: [],
    size: [],  
    products: [],
    carts: [],
    cartSave: [],
    filterList: []
}

export const mainReducer = (state = defaultState, action) => {


    switch (action.type) {
        case "LOAD_PRODUCT": return {
            ...state,
            products: action.payload,
            filterList: action.payload,
            size: action.payload,
            type: action.payload,
            brand: action.payload,
        }

        case "LOAD_CART": return {
            ...state,
            carts: action.payload
        }

        case "LOAD_CART_SAVE": return {
            ...state,
            cartSave: action.payload
        }

        case "SELECT_TYPE":
            {
                switch (action.payload) {
                    case "men": state.men = 'men'; break;
                    case "women": state.women = 'women'; break;
                }
                console.log(state.men, state.women);

                let men = state.products.filter((obj) => obj.type == state.men)
                let women = state.products.filter((obj) => obj.type == state.women)
                let newList = [...men, ...women]
                let a = state.brand.filter(value => state.size.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)
                return {
                    ...state,
                    type: newList,
                    filterList: filteredArray

                }
            }

        case "REMOVE_TYPE":
            {
                switch (action.payload) {
                    case "men": state.men = ''; break;
                    case "women": state.women = ''; break;
                }
                console.log(state.men, state.women);
                let men = state.products.filter((obj) => obj.type == state.men)
                let women = state.products.filter((obj) => obj.type == state.women)
                let newList = [...men, ...women]
                if (newList.length == 0)
                    newList = state.products
                let a = state.brand.filter(value => state.size.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)
                
                return {
                    ...state,
                    filterList: filteredArray,
                    type: newList
                }
            }

        case "SELECT_BRAND":
            {
                // console.log("state",state.sort);
                switch (action.payload) {
                    case "nike": state.nike = 'nike'; break;
                    case "casio": state.casio = 'casio'; break;
                    case "peter england": state.peter = 'peter england'; break;
                }
                let nike = state.products.filter((obj) => obj.brand == state.nike)
                let peter = state.products.filter((obj) => obj.brand == state.peter)
                let casio = state.products.filter((obj) => obj.brand == state.casio)
                let newList = [...nike, ...casio, ...peter]
                let a = state.type.filter(value => state.size.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)


                return {
                    ...state,
                    brand: newList,
                    filterList: filteredArray
                }

            }

        case "REMOVE_BRAND":
            {
                switch (action.payload) {
                    case "nike": state.nike = ''; break;
                    case "casio": state.casio = ''; break;
                    case "peter england": state.peter = ''; break;
                }
                let nike = state.products.filter((obj) => obj.brand == state.nike)
                let peter = state.products.filter((obj) => obj.brand == state.peter)
                let casio = state.products.filter((obj) => obj.brand == state.casio)
                let newList = [...nike, ...casio, ...peter]
                // console.log("remove", newList);
                if (newList.length == 0)
                    newList = state.products

                let a = state.type.filter(value => state.size.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)


                return {
                    ...state,
                    brand: newList,
                    filterList: filteredArray
                }
            }

        case "SELECT_SIZE":
            {
                switch (action.payload) {
                    case "S": state.S = 'S'; break;
                    case "L": state.L = 'L'; break;
                    case "M": state.M = 'M'; break;
                    case "XL": state.XL = 'XL'; break;
                }
                console.log(state.S, state.M, state.L, state.XL);
                let S = state.products.filter((obj) => obj.size == state.S)
                let M = state.products.filter((obj) => obj.size == state.M)
                let L = state.products.filter((obj) => obj.size == state.L)
                let XL = state.products.filter((obj) => obj.size == state.XL)
                let newList = [...S, ...M, ...L, ...XL]
                let a = state.type.filter(value => state.brand.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)


                return {
                    ...state,
                    size: newList,
                    filterList: filteredArray
                }
            }


        case "REMOVE_SIZE":
            {
                switch (action.payload) {
                    case "S": state.S = ''; break;
                    case "L": state.L = ''; break;
                    case "M": state.M = ''; break;
                    case "XL": state.XL = ''; break;
                }
                let S = state.products.filter((obj) => obj.size == state.S)
                let M = state.products.filter((obj) => obj.size == state.M)
                let L = state.products.filter((obj) => obj.size == state.L)
                let XL = state.products.filter((obj) => obj.size == state.XL)
                let newList = [...S, ...M, ...L, ...XL]
                if (newList.length == 0)
                    newList = state.products
                let a = state.type.filter(value => state.brand.includes(value))
                let filteredArray = a.filter(value => newList.includes(value))
                filteredArray=sortArray(filteredArray,state.sort)

                return {
                    ...state,
                    size: newList,
                    filterList: filteredArray
                }
            }
        case "SORT": {
           
            
            // console.log(newList);
            let newList=sortArray(state.filterList,action.payload)
            return {
                ...state,
                filterList: [...newList],
                sort: action.payload
            }
        }
        case "SEARCH":
            console.log(action.payload);
            let searchBar=state.products.filter(obj => obj.description.includes(action.payload))
            let searchType = state.products.filter(obj => obj.type == action.payload)
            let searchBrand = state.products.filter(obj => obj.brand == action.payload)
            let searchCategory = state.products.filter(obj => obj.category == action.payload)
            let newList = [...searchType, ...searchBrand, ...searchCategory,...searchBar]
            if (action.payload == '')
                newList = state.products
            return {
                ...state,
                filterList: newList
            }
        case "REMOVE":
            return {
                ...state,
                S: '',
                M: '',
                L: '',
                XL: '',
                men: '',
                women: '',
                nike: '',
                casio: '',
                peter: '',
                sort: '',
                filterList: state.products,
                size: state.products,
                type: state.products,
                brand: state.products

            }
        default: return state
    }


}


const sortArray=(filteredArray,ele)=>{
            let newList = filteredArray;
            if (ele == "Inc")
                newList.sort((a, b) => { return a.price - b.price });
            else {
                if(ele== "Dec")
                {
                    newList.sort((a, b) => { return b.price - a.price });
                    // newList.reverse();
                }
                else{
                    newList=filteredArray
                }
            }
            return newList
}