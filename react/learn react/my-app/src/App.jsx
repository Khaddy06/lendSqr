import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counter/counterSlice";
import {addItemToCart} from "./features/cart/cartSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const cart = useSelector((state) => state.cart);
  const { numberOfItems, cartItems, totalAmount } = cart;
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>Cart</h1>
        <h2>Number of items: {numberOfItems}</h2>
        <h2>Total Amount: {totalAmount}</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addItemToCart({
        id: 1,
        name: "Product 1",
        price: 100,
      }))}>+ add to cart</button>
    </div>
  );
}

export default App;
