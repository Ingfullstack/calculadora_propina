import MenuItem from "./components/MenuItem";
import OrdenContenido from "./components/OrdenContenido";
import OrdenTotal from "./components/OrdenTotal";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { menuItems } from "./data/db";
import useOrden from "./hooks/useOrden";

function App() {

  const { orden, handleAgregar, handleEliminarOrden, tip, setTip, vaciarOrden } = useOrden();

  return (
    <>
      <header className="bg-teal-300 py-5">
        <h1 className="text-center text-2xl md:text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="container mx-auto my-20 grid md:grid-cols-2">
        <div className="mx-5">
          <h2 className="text-3xl font-black uppercase mb-5">Menu</h2>
          { menuItems.map((item) => (
            <MenuItem key={item.id} item={ item } handleAgregar={ handleAgregar }/>
          ))}
        </div>
        <div className="mx-5">
          <OrdenContenido orden={ orden } handleEliminarOrden={ handleEliminarOrden } />
          <TipPorcentageForm setTip={ setTip } tip={ tip }/>
          <OrdenTotal orden={ orden } tip={ tip } vaciarOrden={ vaciarOrden }/>
        </div>
      </main>
    </>
  );
}

export default App;
