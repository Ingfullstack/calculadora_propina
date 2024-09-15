
import { Dispatch } from "react";
import { tipOptions } from "../data/tipOption";
import { OrdenAction } from "../hooks/useOrdenReducer";

type TipPorcentageFormProps = {
    state: number
    dispatch: Dispatch<OrdenAction>
}

export default function TipPorcentageForm({ dispatch, state }: TipPorcentageFormProps) {
  return (
    <div className="mb-2">
        <h2 className="font-black text-2xl mb-2">Propinas:</h2>

        <form>
            { tipOptions.map((item) => (
                <div key={ item.id } className="flex gap-1">
                    <label htmlFor={ item.id }>{ item.label }</label>
                    <input type="radio" name="tip" id={ item.id } value={ item.value }
                          onChange={ () => dispatch({ type: "tip", payload: { tip: item.value }})}
                          checked={item.value === state}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
