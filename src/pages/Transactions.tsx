import React, { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

interface Transaction {
  id: number;
  type: "Ingreso" | "Gasto";
  amount: number;
  description: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Gestión de Transacciones</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
