import { Fragment, useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./Header.module.css"

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    let q = 0;
    cartCtx.items.forEach((item) => {
        q += Number(item.quantity);
    });

    return (
        <Fragment>
            <div className={classes.header}>
                <h1 className={classes.title}>Shirt Shop</h1>
                <button className={classes["cart-button"]} onClick={props.onShowCart}>
                    Your Cart {q}
                </button>
            </div>
        </Fragment>
    );
}


export default Header;