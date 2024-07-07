import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity , getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const quantityOfCartPizzas = useSelector(getTotalCartQuantity);
  const totalPriceOfCartPizzas = useSelector(getTotalCartPrice);

  if(quantityOfCartPizzas == 0) return null;

  return (
    <div className=" flex justify-between items-center bg-stone-800 text-stone-200 uppercase p-4
     sm:px-6 text-sm md:text-base">
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span className="">{quantityOfCartPizzas} pizzas</span>
        <span>{formatCurrency(totalPriceOfCartPizzas)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
