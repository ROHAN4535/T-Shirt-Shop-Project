import { useContext } from "react";
import InputContext from "../../Store/input-context";
import CartContext from "../../Store/cart-context";

const ShirtItem = () => {
  const inputCtx = useContext(InputContext);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (shirt, size) => {
    const newItem = {
      name: shirt.name,
      size: size,
      price: shirt.price,
      quantity: 1
    };

    cartCtx.addItem(newItem); 
  };
  return (
    <div>
      {inputCtx.items.map((shirt) => (
        <li>
          <strong>{shirt.name}</strong> - {shirt.desc} - {shirt.price}Rs.
          <button
            type="button"
            onClick={() => addToCartHandler(shirt, "L")}
          >{`Large ${shirt.l}`}</button>
          <button
            type="button"
            onClick={() => addToCartHandler(shirt, "M")}
          >{`Medium ${shirt.m}`}</button>
          <button
            type="button"
            onClick={() => addToCartHandler(shirt, "S")}
          >{`Small ${shirt.s}`}</button>
        </li>
      ))}
    </div>
  );
};

export default ShirtItem;