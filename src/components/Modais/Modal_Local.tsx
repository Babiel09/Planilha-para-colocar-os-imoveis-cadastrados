import { motion } from "framer-motion";
import FormLocal from "../FormLocal";

interface ModalLocalProps {
  isCloe: () => void;
  isOpen: () => void;
  Id: string;
}


export default function ModalLocal({isCloe, isOpen, Id}:ModalLocalProps){
    return(
        <div className="backdrop-blur-sm text-white bg-white bg-opacity-25 inset-0 flex justify-center items-center fixed z-50">
          <div className="flex flex-col w-[600px]">
            <button 
            onClick={isCloe} 
            className="text-red-800 self-end text-3xl"
            >X
            </button>
            <div>
            <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2 rounded-3xl">
            <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            <h3 className="font-bold text-5xl mb-5 text-zinc-300">Alterar o <strong className="text-white">LOCAL</strong></h3>
            <div>
              <FormLocal id={Id}/>
            </div>
          </motion.div>
            </div>
            </div>
          </div>
        </div>
    )
}