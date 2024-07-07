import React from 'react';
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Ui/Button';

const UpdateItemQuantity = ({ pizzaId , currentQuatity}) => {
    const dispatch = useDispatch();

    const quantity = useSelector(getCurrentQuantityById(pizzaId));
    function handelIncreaseQuantity(){
      dispatch(increaseItemQuantity(pizzaId));
    }
  
    function handelDecreaseQuantity(){
      if(quantity <= 0) return ;
      dispatch(decreaseItemQuantity(pizzaId));
    }
    return (
        <div className='flex gap-1 md:gap-3 items-center'>
            <Button onclick={handelDecreaseQuantity} type='round'>-</Button>
            <span>{currentQuatity}</span>
            <Button onclick={handelIncreaseQuantity} type='round'>+</Button>
        </div>
    );
}

export default UpdateItemQuantity;
