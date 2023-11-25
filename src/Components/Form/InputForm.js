import { useContext, useRef } from "react";
import InputContext from "../../Store/input-context";
import classes from "./InputForm.module.css"

const InputForm = () => {
    const nameInputRef = useRef("");
    const descInputRef = useRef("");
    const priceInputRef = useRef("");
    const LInputRef = useRef("");
    const MInputRef = useRef("");
    const SInputRef = useRef("");
    const inputCtx = useContext(InputContext);
  
    const submitHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredDesc = descInputRef.current.value;
      const enteredPrice = priceInputRef.current.value;
      const enteredL = LInputRef.current.value;
      const enteredM = MInputRef.current.value;
      const enteredS = SInputRef.current.value;
  
      const shirtObj = {
        name: enteredName,
        desc: enteredDesc,
        price: enteredPrice,
        l: enteredL,
        m: enteredM,
        s: enteredS 
      };
      
      inputCtx.addItem(shirtObj);
      
      nameInputRef.current.value = "";
      descInputRef.current.value = "";
      priceInputRef.current.value = "";
      LInputRef.current.value = "";
      MInputRef.current.value = "";
      SInputRef.current.value = "";
    };
    return (
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <div>
            <label className={classes.label}>ShirtName:</label>
            <input type="text" className={classes.input} ref={nameInputRef} />
          </div>
          <div>
            <label className={classes.label}>Description:</label>
            <input type="text" className={classes.input} ref={descInputRef} />
          </div>
          <div>
            <label className={classes.label}>Price:</label>
            <input type="number" className={classes.input} ref={priceInputRef} />
          </div>
          <div>
            Quantity Available:
          </div>
          <div>
            <label className={classes.label}>L</label>
            <input type="number" className={classes.input} ref={LInputRef} />
          </div>
          <div>
            <label className={classes.label}>M</label>
            <input type="number" className={classes.input} ref={MInputRef} />
          </div>
          <div>
            <label className={classes.label}>S</label>
            <input type="number" className={classes.input} ref={SInputRef} />
          </div>
          <div>
            <button type="submit" className={classes.button}>Add Product</button>
          </div>
        </form>
      </div>
    );
  };

export default InputForm;