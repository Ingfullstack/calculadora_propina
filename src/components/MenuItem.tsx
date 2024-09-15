import { Dispatch } from "react"
import { OrdenAction } from "../hooks/useOrdenReducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    dispatch: Dispatch<OrdenAction>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button onClick={ () => dispatch({ type: "agregar-orden", payload: { orden: item }})} className="mb-2 rounded-md border-2 border-teal-400 p-3 w-full flex justify-between items-center hover:bg-teal-200 transition-all duration-300 ease-out">
        <span>{ item.name }</span>
        <span className="font-black">${ item.price }</span>
    </button>
  )
}
