import { useState } from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState(); // obtener info

  // capturar los valores
  const [description, setDescription] = useState(); // gaurdar la descripcion en que hemos gastado
  const [amount, setAmount] = useState(0); // el monto ingresado comienza con 0 k

  const onSubmit = (event) => {
    event.preventDefault(); // previene que se reinicie el navegador al dar click
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    }); // console.log(description, amount); // obtiene la info del form
    setAmount(0)
    setDescription('')
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ingresa el detalle"
          onChange={(event) => setDescription(event.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />

        <input
          type="number"
          step="0.01"
          placeholder="ingresa un monto"
          onChange={(event) => setAmount(event.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />

        <button className="bg-indigo-500 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50">
          add transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
