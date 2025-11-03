import { useState, useEffect } from "react";
import Header from "../components/Header1";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import Grafics from "../components/Grafics";

export default function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

   return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/Money.jpg')" }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Header />

        <div className="max-w-2xl mx-auto p-4 flex flex-col gap-6">
          {/* 🧾 Resumo (saldo, entradas, saídas) */}
          <Summary transactions={transactions} />

          {/* 📊 Gráfico de gastos por categoria */}
          <Grafics transactions={transactions} />

          {/* 📝 Formulário de nova transação */}
          <TransactionForm onAddTransaction={addTransaction} />

          {/* 📃 Lista das transações */}
          <TransactionList
            transactions={transactions}
            onDelete={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}