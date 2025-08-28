export default function Summary({ transactions }) {
  const entradas = transactions
    .filter(t => t.type === "entrada")
    .reduce((acc, t) => acc + t.amount, 0);

  const saidas = transactions
    .filter(t => t.type === "saida")
    .reduce((acc, t) => acc + t.amount, 0);

  const saldo = entradas - saidas;

  return (
    <div className="bg-white p-4 rounded shadow-md flex justify-around">
      <div className="text-green-500">Entradas: R$ {entradas.toFixed(2)}</div>
      <div className="text-red-500">Saídas: R$ {saidas.toFixed(2)}</div>
      <div className="font-bold">Saldo: R$ {saldo.toFixed(2)}</div>
    </div>
  );
}
    