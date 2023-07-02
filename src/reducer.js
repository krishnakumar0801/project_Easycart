export var initialstate ={

    basket:[],
}

var reducer =(state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_Basket":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
        case "Remove_Item":
           var newcart=[...state.basket]
           var index =state.basket.findIndex((basketItem) => basketItem.id===action.id)
            if(index >=0){
                newcart.splice(index,1)
            }
        }
        return {...state, basket :newcart}

}

export default reducer