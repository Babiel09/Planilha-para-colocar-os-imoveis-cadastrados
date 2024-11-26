import FormNome from "../FormNome";
import { motion } from "framer-motion";

interface ModalNomeProps {
  isCloe: () => void;
  Id: string;
}

export default function ModalNome({ isCloe, Id }: ModalNomeProps) {
  return (
    <div className="bg-opacity-25 inset-0 z-50 backdrop-blur-sm text-white fixed flex justify-center items-center bg-white">
      {/*Botão de fechamento */}
      <div className="flex flex-col w-[600px]">
        <button className="self-end text-3xl text-red-800" onClick={isCloe}>
          X
        </button>
        <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2 rounded-3xl">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            <h3 className="font-bold text-5xl mb-5 text-zinc-300">
              Alterar o <strong className="text-white">NOME</strong>
            </h3>
            <div>
              <FormNome userId={Id} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
