import {RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Ui/Home";
import Menu , {loader as menuLoader} from "./featurs/menu/Menu";
import Cart from "./featurs/cart/Cart"
import CreateOrder , {action as createOrderAction} from "./featurs/order/CreateOrder";
import Order , {loader as orderLoader} from "./featurs/order/Order";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";

const router = createBrowserRouter([
  {
    element:<AppLayout /> ,
    errorElement:<Error /> ,
    children:[
      {
        path:'/' ,
        element:<Home /> ,
      },
      {
        path:'/menu' ,
        element:<Menu /> ,
        loader:menuLoader ,
        errorElement:<Error /> ,
      },
      {
        path:'/cart' ,
        element:<Cart />
      },
      {
        path:'/order/new' ,
        element:<CreateOrder /> ,
        action:createOrderAction
      } ,
      {
        path:'/order/:orderId' ,
        element:<Order /> ,
        loader:orderLoader ,
        errorElement:<Error /> ,

      }
    ]
  },
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
