import Form from "../Form";

interface ModalProps{
    isClose: ()=> void;
    isOpen: ()=> void;
};

export default function Modal({isClose, isOpen}: ModalProps){
    return(
        <div className="text-white fixed inset-0 bg-white bg-opacity-25 backdrop-blur flex justify-center items-center">
            {/*Conteúdo do Modal */}
            <div className="w-[600px] flex flex-col">
                <button 
                onClick={isClose}
                className="self-end">X</button>
                <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2 rounded-3xl">
                <div className="p-6">

                    <h3 className="font-semibold text-xl mb-5">Insira as informações do imovel:</h3>
                    <div>
                        <Form/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};