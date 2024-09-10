import { useState } from "react"
import { MenuItem, OrdenItem } from "../types";

export default function useOrden() {
  
    const [orden, setOrden] = useState<OrdenItem[]>([]);
    const [tip, setTip] = useState(0);

    const handleAgregar = (item: MenuItem) => {
        
        const existe = orden.find(prevItem => prevItem.id === item.id);
        if (existe) {

            const actualizar = orden.map(prevItem => prevItem.id === item.id ? { ...prevItem, cantidad: prevItem.cantidad + 1 } : prevItem);
            setOrden(actualizar);
        }else{
            
            const newItem = {...item, cantidad: 1}
            setOrden([...orden, newItem]);
        }
    }

    const handleEliminarOrden = (id: MenuItem['id']) => {
        setOrden((prev) => prev.filter((item) => item.id !== id));
    }

    const vaciarOrden = () => {
        setOrden([])
        setTip(0)
    }

    return{
        orden,
        tip,
        setTip,
        handleAgregar,
        handleEliminarOrden,
        vaciarOrden
    }
}
