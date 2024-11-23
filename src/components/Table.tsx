"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PlanProps from "../utils/plan";
import { Trash2 } from "lucide-react";
import ModalNome from "./Modais/Modal_Nome";

export default function Table() {
  const [plan, setPlan] = useState<PlanProps[] | null>(null);
  const [modalNome, setModalNome] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPlanilhas = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:8000/plan");

        if (!response.ok) {
          throw new Error("Fudeu meu gostoso");
        }

        const result: PlanProps[] = await response.json();

        setPlan(result);
        setLoading(false);
      } catch (err) {
        alert(err)
        console.log(err)
      };
    };
    fetchPlanilhas();
  }, []);

  const handleDeletePlanilha = async (id:string) => {
    try{
        const response = await fetch(`http://localhost:8000/plan/${id}`,{
        method:"DELETE"
        });
        setPlan((prevPlan) => prevPlan?.filter((item) => item.id !== id) || []);
    }catch (err) {
        alert(err)
        console.log(err)
      };
  };

  const handleOpenModalNome = () => {
    setModalNome(true);
  }
  const handleCloseModalNome = () => {
    setModalNome(false);
  }

  return (
    <motion.div 
    initial={{z:100}}
    animate={{z:0}}
    transition={{ease: "easeIn", duration:3.5}} 
    className="flex justify-center mt-20 overflow-x-auto text-white">
        <div className="border border-zinc-400 min-w-full relative">
      <table className="min-w-full border-collapse rounded-sm overflow-hidden shadow-xl text-left">
        <thead className="bg-gradient-to-r from-zinc-500 via-zinc-800 to-black font-semibold">
          <tr>
            <th>NOME</th>
            <th>LOCAL</th>
            <th>BAIRRO</th>
            <th>DELETAR</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="bg-zinc-800">
              <td>Carregando...</td>
              <td>Carregando...</td>
              <td>Carregando...</td>
              <td>
                <button className="rounded-md bg-zinc-500 flex flex-row py-2 px-4 hover:bg-red-400 mb-5">
                Carregando...
                </button>
              </td>
            </tr>
          ) : null}
          {plan?.map((item) => (
            <tr className="bg-zinc-800" key={item.id}>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer" onClick={handleOpenModalNome}>{item.nome}</td>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer">{item.local}</td>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer">{item.bairro}</td>
              <td>
                <button 
                onClick={()=>handleDeletePlanilha(item.id)}
                className="rounded-md bg-red-500 flex flex-row py-2 px-4 hover:bg-red-400">
                  <Trash2 /> Deletar Planilha
                </button>
              </td>
              <div>{modalNome && <ModalNome isCloe={handleCloseModalNome} Id={item.id} isOpen={handleOpenModalNome} />}</div>
            </tr>
          ))}
        </tbody>
        
      </table>
        </div>
    </motion.div>
  );
}
