import React from 'react';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import Button from '../../Ui/Button';

const DeleteItem = ({itemId}) => {
    const dispatch = useDispatch()

    function handelDeletPizza(){
        if(window.confirm('are you sure you want to delet this pizza!')){
          dispatch(deleteItem(itemId));
        }
      } 
    return (
        <Button type='small' onclick={handelDeletPizza}>DELETE</Button>
    ) ;
}

export default DeleteItem;
