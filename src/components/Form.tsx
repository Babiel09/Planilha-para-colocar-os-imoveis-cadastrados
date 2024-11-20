import { PlaceholdersAndVanishInput } from "@/src/components/ui/placeholders-and-vanish-input";
import { useState } from "react";

export default function Form() {
  const [nome, setNome] = useState<string>("");

  const handleSubmit = (evento: React.FormEvent) => {
    evento.preventDefault();
  };

  const placeholder = ["Digite o Nome do imovel"];
  const placeholder2 = ["Digite o Bairro do imovel"];
  const placeholder3 = ["Digite onde o imovel foi encontrado"];

  return (
    <form className="text-white" onSubmit={handleSubmit}>
      <div>
        <div className="flex justify-center items-center">
          <PlaceholdersAndVanishInput
            placeholders={placeholder}
            onChange={(evento) => setNome(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>

        <br />

        <div className="flex justify-center items-center">
          <PlaceholdersAndVanishInput
            placeholders={placeholder2}
            onChange={(evento) => setNome(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
        <br />

        <div className="flex justify-center items-center">
          <PlaceholdersAndVanishInput
            placeholders={placeholder3}
            onChange={(evento) => setNome(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
        <br />
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="rounded-lg px-2 py-4 bg-zinc-700 text-white"
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}
