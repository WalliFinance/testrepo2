'use client'
import { useState } from "react";

export default function useCart(){
    const [useCart,setUseCart] = useState(0)
    return{useCart,setUseCart}
}

