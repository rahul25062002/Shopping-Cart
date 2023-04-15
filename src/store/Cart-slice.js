import {createSlice} from '@reduxjs/toolkit';

const createslice =createSlice({
    name:'cart',
    initialState:{
        itemList: [],
        totalquantity: 0,
        showcart: true,
        
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
           const existingItem=state.itemList.find((item)=>item.id===newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalprice+=newItem.price;
                
            }
            else {
                state.itemList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalprice:newItem.price,
                    name:newItem.name,
                    
                })
                state.totalquantity++;
            }
            // state.total+=state.itemList.map((item)=>item.totalprice);

        },
        removefromList(state,action){
            const id=action.payload;
            let existingitem=state.itemList.find((item)=>item.id===id);
            
            
            if(existingitem.quantity===1){
               state.itemList= state.itemList.filter((item)=>item.id!==id);
               state.totalquantity--;
             
            }
            else  {
                existingitem.quantity--;
                existingitem.totalprice-=existingitem.price;
              
            }
            
            
       

        },
        showcart(state){
            state.showcart=!state.showcart;
        }
        
    }
})

export const actions=createslice.actions;
export default createslice;