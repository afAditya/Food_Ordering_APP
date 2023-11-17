import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-5 m-0">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-md p-1 m-1"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <h1>Your Cart is empty! Add items to the cart</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
