import { useState, useEffect } from "react";
import PlanProps, { ClanEnum } from "../utils/plan";
import { motion } from "framer-motion";


export default function Form() {
  const [nomeManda, setNome] = useState<string | undefined>(undefined);
  const [bairroManda, setBairro] = useState<string | undefined>(undefined);
  const [localManda, setLocal] = useState<string | undefined>(undefined);
  const [contatoManda, setContato] = useState<string | undefined>(undefined);
  const [numeroManda, setNumero] = useState<number | undefined>(undefined);
  const [tipoManda, setTipo] = useState<ClanEnum | undefined>(undefined);
  const [plan, setPlan] = useState<PlanProps[] | undefined>(undefined);

  const handleSubmit = async (evento: React.FormEvent) => {
   
      try{

      await fetch("http://localhost:8000/plan", {
          method:'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            nome:nomeManda,
            bairro:bairroManda,
            local:localManda,
            contato:contatoManda,
            numero:numeroManda,
            tipo:tipoManda

          }),
        });

      } catch(err){

        throw new Error;

      };
  };

  return (
      <form className="text-white" onSubmit={handleSubmit}>
        <motion.div
    initial={{y:100}}
    animate={{y:0}}
    transition={{duration:0.6}}>
    
        <div className="flex justify-center items-center">
          <input
          value={nomeManda}
          className="min-w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600"
            placeholder="Nome"
            onChange={(evento) => setNome(evento.target.value)}
          />
        </div>
        <br />
        <div className="flex justify-center items-center">
          <input
          value={contatoManda}
          className="min-w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600"
            placeholder="Contato"
            onChange={(evento) => setContato(evento.target.value)}
          />
        </div>
        <br />
        <div className="flex justify-center items-center">
          <input
          type="number"
          value={numeroManda}
          className="min-w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600"
            placeholder="Número"
            onChange={evento=>setNumero(Number(evento.target.value))}
          />
        </div>
        <br />
        <div className="flex justify-center items-center">
             <select 
             name="tipo" 
             id="tipo" 
             value={tipoManda}  
             onChange={evento=>setTipo(evento.target.value as ClanEnum)}
             className="min-w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600">
              <option value="starter">Escolha um valor</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
             </select>
        </div>

        <br />

        <div className="flex justify-center items-center">
          <input
          value={localManda}
          className="w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600"
            placeholder="Local"
            onChange={(evento) => setLocal(evento.target.value)}
          />
        </div>
        <br />

        <div className="flex justify-center items-center">
          <input
          value={bairroManda}
          className="w-full text-xl rounded-full px-4 py-2 bg-zinc-800 text-white focus:bg-zinc-900 border-2 border-zinc-300 focus:border-zinc-600"
            placeholder="Bairro"
           onChange={(evento) => setBairro(evento.target.value)}
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
