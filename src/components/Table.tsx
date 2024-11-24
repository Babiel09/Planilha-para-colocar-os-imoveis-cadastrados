"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PlanProps from "../utils/plan";
import { Trash2 } from "lucide-react";
import ModalNome from "./Modais/Modal_Nome";
import ModalLocal from "./Modais/Modal_Local";

export default function Table() {
  const [plan, setPlan] = useState<PlanProps[] | null>(null);
  const [modalNome, setModalNome] = useState<boolean>(false);
  const [modalLocal, setModalLocal] = useState<boolean>(false);
  const [modalBairro, setModalBairro] = useState<boolean>(false);
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

  const handleOpenModalLocal = () => {
    setModalLocal(true);
  }
  const handleCloseModalLocal = () => {
    setModalLocal(false);
  }

  const handleOpenModalBairro = () => {
    setModalBairro(true);
  }
  const handleCloseModalBairro = () => {
    setModalBairro(false);
  }

  return (
    <motion.div 
    initial={{z:100}}
    animate={{z:0}}
    transition={{ease: "easeIn", duration:3.5}} 
    className="flex justify-center mt-20 overflow-x-auto text-white">
        <div className="border-4 border-zinc-500 min-w-full relative rounded-sm">
      <table className="min-w-full border-collapse rounded-sm overflow-hidden shadow-xl text-center">
        <thead className="bg-gradient-to-r from-zinc-700 via-zinc-800 to-black font-semibold">
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>LOCAL</th>
            <th>BAIRRO</th>
            <th>DELETAR</th>
          </tr>
        </thead>
        <tbody>
         

        {plan?.map((item) => (
            <tr className="bg-zinc-800" key={item.id}>
              <td className="text-zinc-200 font-bold px-4 border-2 border-zinc-200">{item.id}</td>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer px-4 border-2 border-zinc-200" onClick={handleOpenModalNome}>{item.nome}</td>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer px-4 border-2 border-zinc-200" onClick={handleOpenModalLocal}>{item.local}</td>
              <td className="text-zinc-200 font-bold hover:text-white hover:cursor-pointer px-4 border-2 border-zinc-200">{item.bairro}</td>
              <td className="border-2 border-zinc-200">
                <button 
                onClick={()=>handleDeletePlanilha(item.id)}
                className="rounded-md bg-red-500 flex flex-row py-2 px-4 hover:bg-red-400 mb-2 ml-2 mr-1.5">
                  <Trash2 /> Deletar Planilha 
                </button>
              </td>
            </tr>
          ))}
           
        </tbody>
        
      </table>
        </div>
        {plan?.map((item)=>(
          <>
          <div>{modalNome && <ModalNome isCloe={handleCloseModalNome} Id={item.id} isOpen={handleOpenModalNome} />}</div>
          <div>{modalLocal && <ModalLocal isCloe={handleCloseModalLocal} Id={item.id} isOpen={handleOpenModalLocal} />}</div>
          </>
          
        ))}
    </motion.div>
  );
}
