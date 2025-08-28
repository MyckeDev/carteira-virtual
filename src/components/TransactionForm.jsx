import { useState } from "react";

export default function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("entrada");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddTransaction({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      type
    });

    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md flex flex-col gap-2">
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Valor"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded"
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
        <option value="entrada">Entrada</option>
        <option value="saida">Saída</option>
      </select>
      <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Adicionar</button>
    </form>
  );
}
