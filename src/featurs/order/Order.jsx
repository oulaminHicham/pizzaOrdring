// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {calcMinutesLeft,formatCurrency,formatDate,} from "../../utils/helpers";
import OrderItem from "./OrderItem";


function Order() {
  const order = useLoaderData()
  const {id,status,priority, priorityPrice,orderPrice, estimatedDelivery, cart} = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-8">
      <div className="flex gap-2 justify-between items-center flex-wrap ">
        <h2 className="text-xl font-semibold">order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full px-3 text-xs uppercase font-semibold text-red-50 tracking-wide"> Priority</span>}
          <span className="bg-green-500 rounded-full px-3 text-xs uppercase font-semibold text-green-50 tracking-wide"> {status} order</span>
        </div>
      </div>

      <div className="flex gap-2 justify-between items-center flex-wrap bg-stone-200 px-6 py-5 ">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="space-y-2 divide-y divide-stone-300 bg-stone-200 px-6 py-5 ">
        {
          cart.map(item=>(
            <OrderItem key={item.name} item={item}/>
          ))
        }
      </ul>

      <div className="space-y-2 bg-stone-200 py-5 px-6">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font-medium text-stone-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}){
  const order = await getOrder(params.orderId);
  return order ;
}

export default Order;
