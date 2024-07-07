import { useDispatch, useSelector } from "react-redux";
import Button from "../../Ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItme } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import { getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/updateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // const cart = useSelector(state=>state.cart.cart);
  // const thisPizzIncart =cart.find(pizz=>pizz.pizzaId == id) !== undefined ; 
  const currentQuantity = useSelector(getCurrentQuantityById(id)) ;
  const isInCart = currentQuantity > 0 ;

  const dispatch = useDispatch();
  // const cart = useSelector(state=>state.cart);

  // function to handel clicking to add item to cart
  function handelAddToCart(){
    const newItem = {
              pizzaId:id,
              name,
              quantity:1 ,
              unitPrice:16 ,
              totalPrice:unitPrice * 1
          }
    dispatch(addItme(newItem));
    
  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-40 grayscale' :''}`}  />
      <div className="flex flex-col justify-around grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between items-center ">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {isInCart && <div className="flex items-center">
                          <UpdateItemQuantity pizzaId={id} currentQuatity={currentQuantity}/>
                          <DeleteItem itemId={id}/>
                      </div>}
          {!soldOut &&  !isInCart &&  <Button onclick={handelAddToCart}  type='small'>add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
