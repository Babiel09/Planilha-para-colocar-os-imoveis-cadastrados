"use client"
export default function Table() {

    return (
            <div className="flex justify-center mt-20 overflow-x-auto text-white">
            <table className="min-w-full border-collapse rounded-lg overflow-hidden shadow-xl text-left">
                <thead className="bg-gradient-to-r from-zinc-500 via-zinc-800 to-black font-semibold">
                    <tr>
                        <th >Nome</th>
                        <th >Bairro</th>
                        <th >Onde Encontrou</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-zinc-800">
                        <td>
                            Teste do teste
                        </td>
                        <td>
                            Teste do teste2
                        </td>
                        <td>
                            Teste do teste3
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
};