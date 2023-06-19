import { useEffect, useState } from "react";

const useCounter=(isPositive)=>{
    const [counter,setCounter]=useState(0)
   useEffect(()=>{
    const timer =setInterval(()=>{
        setCounter(prev=>{
            return isPositive? prev+1 : prev-1;
        })
    },1000);
    return ()=>clearInterval(timer);
},[])
    return counter;
}

export default useCounter;