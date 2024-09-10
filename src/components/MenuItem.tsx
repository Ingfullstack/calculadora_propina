import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    handleAgregar: (item: MenuItem) => void
}

export default function MenuItem({ item, handleAgregar }: MenuItemProps) {
  return (
    <button onClick={ () => handleAgregar(item) } className="mb-2 rounded-md border-2 border-teal-400 p-3 w-full flex justify-between items-center hover:bg-teal-200 transition-all duration-300 ease-out">
        <span>{ item.name }</span>
        <span className="font-black">${ item.price }</span>
    </button>
  )
}
