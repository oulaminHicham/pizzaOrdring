import { Link, useNavigate } from 'react-router-dom';
import LinkButton from '../../Ui/LinkButton';
import Button from '../../Ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  
  // function to handel clear cart
  function handelClearCart(){
    dispatch(clearCart());
  }

  const {username}=useSelector(state=>state.user);
  const navigate = useNavigate();
  // useEffect(function(){
  //   if(username === '') navigate('/')
  // } ,[username])

  if(!cart.length)  return <EmptyCart/>

  return (
    <div className='px-3 py-3'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>
      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b  py-3'>
        {
          cart.map((item , i)=>(
            <CartItem key={i} item={item}/>
          ))
        }
      </ul>

      <div className='mt-6 space-x-4'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        <Button type='secondary' onclick={handelClearCart}>Clear cart</Button>
      </div>

    </div>
  );
}

export default Cart;
