import { MenuItem, OrdenItem } from "../types";

export type OrdenAction = 
    { type: 'agregar-orden', payload: { orden: MenuItem }} |
    { type: 'remover-item', payload: { id: MenuItem['id'] }} |
    { type: 'remover-orden'} |  
    { type: 'tip', payload: { tip: number }}  

export type OrdenState = {
    orden: OrdenItem[]
    tip:   number
}

export const initialState: OrdenState = {
    orden: [],
    tip:   0
}

export const useOrdenReducer = (state:OrdenState = initialState, action:OrdenAction) => {

    if (action.type === 'agregar-orden') {
        
        const existe = state.orden.find(prevItem => prevItem.id === action.payload.orden.id);
        let actualizar:OrdenItem[] = [];

        if (existe) {

            actualizar = state.orden.map(prevItem => {
                if (prevItem.id === action.payload.orden.id) {
                    if (prevItem.cantidad < 5) {
                        return {... prevItem, cantidad: prevItem.cantidad + 1}
                    }else{
                        return prevItem
                    }
                }
                return prevItem
            });

        }else{
            
            const newItem = {...action.payload.orden, cantidad: 1}
            actualizar = [...state.orden, newItem];
        }

        return{
            ...state,
            orden: actualizar
        }
    }

    if (action.type === 'remover-item') {
        
        return{
            ...state,
            orden: state.orden.filter(item => item.id !== action.payload.id)
        }
    }

    if (action.type === 'remover-orden') {
        
        return{
            ...state,
            orden: [],
            tip:   0
        }
    }

    if (action.type === 'tip') {
        
        return{
            ...state,
            tip: action.payload.tip
        }
    }

    return state
}