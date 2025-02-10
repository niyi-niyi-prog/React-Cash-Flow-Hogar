import React, { useState } from "react";

interface Transaction {
  id: number;
  type: "Ingreso" | "Gasto";
  amount: number;
  description: string;
}

interface Props {
  onAddTransaction: (transaction: Transaction) => void;
}

const TransactionForm: React.FC<Props> = ({ onAddTransaction }) => {
  const [type, setType] = useState<"Ingreso" | "Gasto">("Ingreso");
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description) return;

    const newTransaction: Transaction = {
      id: Date.now(),
      type,
      amount,
      description,
    };

    onAddTransaction(newTransaction);
    setAmount(0);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Tipo:</label>
      <select value={type} onChange={(e) => setType(e.target.value as "Ingreso" | "Gasto")}>
        <option value="Ingreso">Ingreso</option>
        <option value="Gasto">Gasto</option>
      </select>

      <label>Monto:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />

      <label>Descripción:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Agregar Transacción</button>
    </form>
  );
};

export default TransactionForm;
