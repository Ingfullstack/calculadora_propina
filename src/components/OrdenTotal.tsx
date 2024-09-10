import { useMemo } from "react"
import { OrdenItem } from "../types"

type OrdenTotalProps = {
    orden: OrdenItem[]
    tip: number
    vaciarOrden: () => void
}

export default function OrdenTotal({ orden, tip, vaciarOrden }: OrdenTotalProps) {

    const subtotal = useMemo(() => orden.reduce((total,item) => total + ( item.cantidad * item.price), 0), [orden])
    const propina = useMemo(() => subtotal * tip,[orden,tip])
    const total = useMemo(() => subtotal + propina ,[orden, tip]);

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

            <button onClick={ vaciarOrden } disabled={ total === 0} className="disabled:opacity-10 bg-black w-full p-2 mt-5 text-white font-bold uppercase">Vaciar Orden</button>
        </div>
    </>
  )
}
