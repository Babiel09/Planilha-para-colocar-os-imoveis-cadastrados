import { useState, useEffect } from "react";
import PlanProps from "../utils/plan";
import { motion } from "framer-motion";


export default function Form() {
  const [nomeManda, setNome] = useState<string | undefined>(undefined);
  const [bairroManda, setBairro] = useState<string | undefined>(undefined);
  const [localManda, setLocal] = useState<string | undefined>(undefined);
  const [plan, setPlan] = useState<PlanProps[] | undefined>(undefined);

  const handleSubmit = (evento: React.FormEvent) => {
    const fetchPost = async ()=> {
      try{

        const post = await fetch("http://localhost:8000/plan", {
          method:'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            nome:nomeManda,
            bairro:bairroManda,
            local:localManda
          }),
        });

      } catch(err){

        throw new Error;

      };
    };
    fetchPost();
  };


  const placeholder = ["Digite o Nome do imovel"];
  const placeholder2 = ["Digite o Bairro do imovel"];
  const placeholder3 = ["Digite onde o imovel foi encontrado"];

  return (
      <form className="text-white" onSubmit={handleSubmit}>
        <motion.div
    initial={{y:100}}
    animate={{y:0}}
    transition={{duration:0.6}}>
    
        <div className="flex justify-center items-center">
          <input
          value={nomeManda}
          className="min-w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border border-zinc-500 focus:border-zinc-600"
            placeholder="Nome"
            onChange={(evento) => setNome(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>

        <br />

        <div className="flex justify-center items-center">
          <input
          value={bairroManda}
          className="w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border border-zinc-500 focus:border-zinc-600"
            placeholder="Bairro"
           onChange={(evento) => setBairro(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
        <br />

        <div className="flex justify-center items-center">
          <input
          value={localManda}
          className="w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border border-zinc-500 focus:border-zinc-600"
            placeholder="Local"
            onChange={(evento) => setLocal(evento.target.value)}
            onSubmit={handleSubmit}
          />
        </div>
          </motion.div>
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
