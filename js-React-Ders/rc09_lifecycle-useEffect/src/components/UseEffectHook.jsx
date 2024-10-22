//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useEffect, useState } from "react"

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array



const UseEffectHook = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
  !count&&console.log("object");

  },[count])






  
  return (
    
    <div className="container text-center">
      {console.log("retunrn")}
      <h2>UseEffect Hook</h2>
       <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={()=>{setCount(count+1)}}>
          INC
        </button>
    </div>
  )
}

export default UseEffectHook
