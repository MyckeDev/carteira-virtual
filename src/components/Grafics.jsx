import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Grafics({ transactions }) {
  // Filtra apenas as saídas
  const expenses = transactions
    .filter((t) => t.type === "saida")
    .reduce((acc, t) => {
      const category = t.description || "Outros";
      acc[category] = (acc[category] || 0) + t.amount;
      return acc;
    }, {});

  // Transforma o objeto em um array compatível com o gráfico
  const data = Object.entries(expenses).map(([category, value]) => ({
    category,
    value,
  }));

  // Caso não haja dados
  if (data.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow-md text-center text-gray-500">
        Nenhuma despesa para mostrar.
      </div>
    );
  }

  // Gráfico
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-center text-xl font-semibold mb-4 text-[#253965]">
        Gastos por Categoria
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
