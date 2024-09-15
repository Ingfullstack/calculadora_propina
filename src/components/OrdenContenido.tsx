import { Dispatch } from "react";
import { OrdenItem } from "../types";
import { OrdenAction } from "../hooks/useOrdenReducer";

type OrdenContenidoProps = {
  state: OrdenItem[]
  dispatch: Dispatch<OrdenAction>
};

export default function OrdenContenido({ state, dispatch}: OrdenContenidoProps) {
  return (
    <div className="">
      {state.length === 0 ? (
        <h2 className="text-center text-3xl font-black uppercase mb-5">No hay Orden</h2>
      ) : (
        <h2 className="text-center text-3xl font-black uppercase mb-5">Consumo</h2>
      )}

      {state.map((item) => (
        <div key={ item.id } className="mb-2">
            <div className="flex justify-between items-center border-t-2 rounded p-2 last-of-type:border-b-2">
                <div className="mb-3">
                    <p className="text-lg">{ item.name }</p>
                    <p className="font-black text-lg">${ item.price }</p>
                    <p className="font-black">Cantidad: { item.cantidad }</p>
                </div>
                <button onClick={ () => dispatch({ type: "remover-item", payload: { id: item.id }})} className="bg-red-500 h-8 w-8 text-white rounded-full">X</button>
            </div>
        </div>
      ))}
    </div>
  );
}
