import Form from "../Form";
import { motion } from "framer-motion";
interface ModalProps{
    isClose: ()=> void;
    isOpen: ()=> void;
};

export default function Modal({isClose, isOpen}: ModalProps){
    return(
        <div
        className="bg-opacity-25 inset-0 z-50 backdrop-blur-sm text-white fixed flex justify-center items-center bg-white">
            {/*Conteúdo do Modal */}
            <motion.div
            initial={{y:100}} 
            animate={{y:0}}
            transition={{ease: "easeIn", duration: 0.6}} 
            className="w-[600px] flex flex-col">
                <div className="flex flex-col w-[600px]">
        <button className="self-end text-3xl text-red-800" onClick={isClose}>
          X
        </button>
                    </div>
                <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2 rounded-3xl">
                <div className="p-6">

                    <h3 className="font-semibold text-5xl mb-5">Insira as informações:</h3>
                    <div
                    >
                        <Form/>
                    </div>
                </div>
                </div>
            </motion.div>
        </div>
    )
};