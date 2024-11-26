import { useState } from "react";

interface Funciona {
  userId: string;
}

export default function FormNome({ userId }: Funciona) {
  const [newNome, setNewNome] = useState<string | undefined>(undefined);
  
  console.log(userId);
  const handleUpdateNOme = async () => {
    try {
      await fetch(`http://localhost:8000/plan/${userId}/nome`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: newNome,
        }),
      });
    } catch (err) {
      throw new Error(`Ocorreu um erro durante o método PUT: ${err}`);
    }
  };

  return (
    <form onSubmit={handleUpdateNOme}>
      <div>
        <input
          value={newNome}
          placeholder="Digite o novo nome"
          onChange={evento=>setNewNome(evento.target.value)}
          className="rounded-xl bg-zinc-800 text-white min-w-full text-3xl px-4 py-2 border-2 border-zinc-300 focus:bg-zinc-900 focus:border-zinc-100"
          type="text"
        />
        </div>
        <br />  
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded-lg px-2 py-4 bg-zinc-700 text-white hover:bg-zinc-500"
          >
            Adicionar
          </button>
        </div>
    </form>
  );
}
