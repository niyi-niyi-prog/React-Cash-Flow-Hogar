import React from "react";

interface Transaction {
  id: number;
  type: "Ingreso" | "Gasto";
  amount: number;
  description: string;
}

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <div>
      <h2>Lista de Transacciones</h2>
      {transactions.length === 0 ? (
        <p>No hay transacciones registradas.</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              <strong>{t.type}:</strong> ${t.amount} - {t.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
