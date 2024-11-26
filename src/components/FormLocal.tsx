import { useState } from "react"

interface FormLocal{
    id:string
}

export default function FormLocal({id}:FormLocal){
    const [newLocal, setNewLocal] = useState<string>("");
    const handleSubmit = async () => {
         await fetch(`http://localhost:8000/plan/${id}/local`, {
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                local:newLocal
            })
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                value={newLocal}
                onChange={evento=>setNewLocal(evento.target.value)}
                type="text"
                className="rounded-xl border-2 bouder-zinc-300 px-4 py-2 bg-zinc-800 text-white min-w-full text-3xl"
                placeholder="Atualizar local"
                />
                    </div>
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
    )
}