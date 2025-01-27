import { useState } from "react";

function ButtonIncrement(){


   const [value,setValue] = useState(0);



   return ( <button className="bg-black  text-white p-4 rounded-full" onClick={() => { setValue((prevValue) => prevValue+1 ) } } >click me {value} </button>  ); 

}


export default ButtonIncrement;