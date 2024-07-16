'use client'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState,useRef } from "react";
import increaseSvg from '@/public/icon-increment-quantity.svg'
import decreaseSvg from '@/public/icon-decrement-quantity.svg'
import addToCartImg from '@/public/icon-add-to-cart.svg'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import styles from './menuList.module.scss'


export default function MenuList ({items}:any){
    const [cart,setCart] = useState(0)

    function decreaseCount(){
        setCart(currentValue=>currentValue-1)
    }
    function increaseCount(){
        setCart(currentValue=>currentValue+1)
    }


 return(
<div className={styles.flexContainer}>
{items.map((item: { id: Key | null | undefined; img: string | StaticImport; subtitle: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; price: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; })=>(
    <div key={item.id} className={styles.container}>
        <div className={styles.imageContainer}>
        <Image
        width={250}
        height={250}
        src={item.img}
        alt="Dessert image"
        />
        <div className={styles.hiddingControllers}>
        <button>
            <Image
            width={28}
            height={28}
            src={addToCartImg}
            alt="add to cart svg"
            />
            Add to Cart
        </button>
            <div className={styles.inputContainer}>
            <Image
            width={20}
            height={20}
            alt="decrease svg"
            src={decreaseSvg}
            onClick={decreaseCount}
            />
            <input 
            type="number" 
            value={cart}
            />
            <Image
            width={20}
            height={20}
            alt="increase svg"
            src={increaseSvg}
            onClick={increaseCount}
            />
            </div>
        </div>
      
        </div>
        <div className={styles.itemDetails}>
            <h5>{item.subtitle}</h5>
            <h4>{item.title}</h4>
            <span>{item.price}</span>
        </div>
    </div>
))}
</div>
 )   
}




