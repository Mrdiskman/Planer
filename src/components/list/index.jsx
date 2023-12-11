import { useState } from "react";
import { Item } from "../items";
import { Reorder } from "framer-motion";
import { ListContainer } from "./style";

export function List(){
    const initialItems = [
     {name:"🍅 Tomato", id:1, status:"não feito", date:"22/11"},
     {name:"🥒 Cucumber", id:2, status:"não feito", date:"22/11"},
     {name:"🧀 Cheese", id:3, status:"não feito", date:"22/11"}, 
     {name:"🥬 Lettuce", id:4, status:"não feito",date:"22/11"}];
    const [items, setItems] = useState(initialItems);
    return(
        <ListContainer> 
          <Reorder.Group axis="y" onReorder={setItems} values={items} className="animationContainer">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
           </Reorder.Group>
        </ListContainer>
    )
}