export type MenuItem = {
    id:    number
    name:  string
    price: number
}

export type OrdenItem = MenuItem & {
    cantidad: number
}