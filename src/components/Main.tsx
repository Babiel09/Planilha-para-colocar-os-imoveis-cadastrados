"use client"

import Modal from './Modais/Modal';
import { motion } from "framer-motion";
import Table from './Table';
import { useState } from 'react';

export default function Main(){
    const [modal, setModal] = useState<boolean>(false);


    const handleOpenModal = () => {
        setModal(true);
    };

    const handleCloseModal = () => {
        setModal(false);
    };

    return(
        <div className='flex items-center justify-center px-2'>
             <div className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500'>
            <div>
                <main>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-3xl'>Segue a tabela com os imovéis capitados:</h1>
                    </div>
                    <div>
                        <Table/>
                        </div>
                    <div className='max-w-fit ml-auto mr-auto mt-20 z-50'>
                        <button
                        onClick={()=>handleOpenModal()}
                        className='rounded-lg px-2 py-4 bg-zinc-700 text-white hover:bg-zinc-500'>
                            Adicionar
                        </button>
                    </div>
                </main>
            </div>
        </div>
        <div>{modal && <Modal isClose={handleCloseModal} isOpen={handleOpenModal}/>}</div>
        </div>
       
        
    );
};