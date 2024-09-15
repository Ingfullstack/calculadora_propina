import { Dispatch, useMemo } from "react"
import { OrdenItem } from "../types"
import { OrdenAction } from "../hooks/useOrdenReducer"

type OrdenTotalProps = {
    orden: OrdenItem[]
    state: number
    dispatch: Dispatch<OrdenAction>
}

export default function OrdenTotal({ orden, state, dispatch }: OrdenTotalProps) {

    const subtotal = useMemo(() => orden.reduce((total,item) => total + ( item.cantidad * item.price), 0), [orden])
    const propina = useMemo(() => subtotal * state,[orden,state])
    const total = useMemo(() => subtotal + propina ,[orden, state]);

  return (
    <>
        <div>
            <h2 className="font-black text-2xl mb-2">Totales y Propinas:</h2>
            <p className="mb-2">Subtotal a Pagar: {''}
                <span className="font-bold">${ subtotal }</span>
            </p>

            <p className="mb-2">Propinas: {''}
                <span className="font-bold">${ propina }</span>
            </p>

            <p className="mb-2">Total a Pagar: {''}
                <span className="font-bold">${ total }</span>
            </p>

            <button onClick={ () => dispatch({ type: "remover-orden" }) } disabled={ total === 0} className="disabled:opacity-10 bg-black w-full p-2 mt-5 text-white font-bold uppercase">Vaciar Orden</button>
        </div>
    </>
  )
}
