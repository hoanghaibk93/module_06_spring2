import { createContext, useState } from "react";

export const ValueIconCartContext =createContext();
export const ValueIconCartProvider = ({children})=>{

    
 const [valueIconCart, setValueIconCart] = useState(0);
return (
  <ValueIconCartContext.Provider value={{valueIconCart,setValueIconCart}}>
    {children}
  </ValueIconCartContext.Provider>
);
}