import { useState } from "react";
import { Form, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../Ui/Button";
import { useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../Store";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const {username}=useSelector(state=>state.user);

  const navigation = useNavigation();
  const isSubmiting = navigation.state === 'submitting'

  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);

  // const orderId = useLoaderData();
  // console.log(orderId)
  
  if(!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>  

      <Form method="POST" >
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input type="text" name="customer" className="input" defaultValue={username} required />
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col  sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && <p className="px-4 py-3 m-3 rounded-md text-red-700 bg-red-100 text-xs ">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input 
              type="text" 
              name="address" 
              className="input" 
              required />
          </div>
        </div>

        <div className="mb-12 flex gap-5 items-center ">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 mt-4 mx-5"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type='primary' disabled={isSubmiting}>{isSubmiting ? 'placing order ...' : 'order now'}</Button>
        </div>
      </Form>       
    </div>
  );
}

export async function action({request}){
  const formDta = await request.formData() ;
  const data = Object.fromEntries(formDta);
  const order = {
    ...data ,
    cart:JSON.parse(data.cart) ,
    priority:data.priority === 'on'
  }
  // create errors object to store any error detected in form submitin
  const errors = {}
  if(!isValidPhone(data.phone)) errors.phone = 'please give us your correct phone number you might need it to contact you'
  if(Object.keys(errors).length > 0) return errors ;
  // if evraything is okay we create our order and redirect
  const newOrder = await createOrder(order);
  // do not overuse
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`) ;
}
export default CreateOrder;
