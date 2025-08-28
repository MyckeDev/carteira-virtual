export default function TransactionList({ transactions, onDelete }) {
  return (
    <ul className="bg-white p-4 rounded shadow-md">
      {transactions.map((t) => (
        <li key={t.id} className="flex justify-between border-b py-2">
          <span>{t.description}</span>
          <span className={t.type === "entrada" ? "text-green-500" : "text-red-500"}>
            {t.type === "entrada" ? "+" : "-"} R$ {t.amount.toFixed(2)}
          </span>
          <button
            onClick={() => onDelete(t.id)}
            className="text-red-600 hover:underline"
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}
