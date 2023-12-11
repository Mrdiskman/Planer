import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { ItemContainer } from "./style";

export function Item({ item }){
  const y = useMotionValue(0);
  const controls = useDragControls()

  return (
    <ItemContainer>
        <Reorder.Item value={item} id={item} style={{y}} className="itemAnimationContainer"  
        whileHover={{scale: 1.06}} 
        dragControls={controls}
        dragListener={false} 
        >
            <p className="name">{item.name}</p>
            <p className="date">{item.date}</p>
            <p className="done">{item.status}</p>
            <button onPointerDown={(e) => controls.start(e)}></button>
        </Reorder.Item>
    </ItemContainer>
  );
};
