import { useState } from "react";

function Button({children}) {

    function action(){
      console.log(children);
      if (children === '-'){
        setCount(count - 1);
      }

      if (children === '+'){
        setCount(count + 1);
      }
    }
    return (
        <>
          <button onClick={() => {
         action();}}
          >{children}</button>

        </>
    )
}

export default Button;