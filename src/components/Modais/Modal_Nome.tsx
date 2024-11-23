interface ModalNomeProps{
    isCloe:()=>void;
    isOpen:()=>void;
    Id:string;
};

export default function ModalNome({isCloe, isOpen, Id}:ModalNomeProps){
    return(
        <div className="bg-opacity-25 inset-0 z-50 backdrop-blur-sm text-white fixed flex justify-center items-center bg-white">
            {/*Botão de fechamento */}
            <div className="flex flex-col w-[600px]">
                <button
                className="self-end text-3xl"
                onClick={isCloe}
                >
                    X
                </button>
            <div className="dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] p-2 rounded-3xl">
                <div className="p-6">

                    <h3 className="font-semibold text-5xl mb-5">Alterar o <strong>NOME</strong></h3>
                    <div
                    >
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};