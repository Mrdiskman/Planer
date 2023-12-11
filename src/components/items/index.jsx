import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { ItemContainer } from "./style";

export function Item({ item }){
  const y = useMotionValue(0);


  return (
    <ItemContainer>
        <Reorder.Item value={item} id={item} style={{y}} className="itemAnimationContainer">
            <p className="name">{item.name}</p>
            <p className="date">{item.date}</p>
            <p className="done">{item.status}</p>
            <button></button>
        </Reorder.Item>
    </ItemContainer>
  );
};
