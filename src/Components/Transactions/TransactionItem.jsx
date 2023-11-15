import React from "react";
import { useGlobalState } from "../../Context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      {/* <div key={transaction.id}> */}

      <div>
        <p>{transaction.description}</p>
        <span>$ {transaction.amount}</span>
      </div>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="font-bold text-white rounded-lg ml-2">
        X
      </button>
      {/* </div> */}
    </li>
  );
}

export default TransactionItem;
