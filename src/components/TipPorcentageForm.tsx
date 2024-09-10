import { Dispatch } from "react";
import { tipOptions } from "../data/tipOption";

type TipPorcentageFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>
    tip: number
}

export default function TipPorcentageForm({ setTip, tip }: TipPorcentageFormProps) {
  return (
    <div className="mb-2">
        <h2 className="font-black text-2xl mb-2">Propinas:</h2>

        <form>
            { tipOptions.map((item) => (
                <div key={ item.id } className="flex gap-1">
                    <label htmlFor={ item.id }>{ item.label }</label>
                    <input type="radio" name="tip" id={ item.id } value={ item.value }
                          onChange={ (e) => setTip(+e.target.value) }
                          checked={item.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
