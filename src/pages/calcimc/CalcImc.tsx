import CampForm from "@/components/CampForm"
import TabelaImc from "@/components/TabelaImc"
import { useState } from "react"

export default function CalcImc(){
    const [autu, setAutu] = useState<number>(0)
    const [peso, setPeso] = useState<number>(0)
    const [imc, setImc] = useState<number>( )
    function calcular (){
       
       let res = peso/(autu*autu)
        setImc(res)
    }

    return(
        <>
           <div className=" flex  border border-black w-[800px] gap-5 justify-center items-center">
            <div>
    
                <CampForm label="Peso " state={peso} funcState={setPeso}/>
                <CampForm label="Altura " state={autu} funcState={setAutu}/>
                <button onClick={calcular} className="p-2 bg-slate-500 rounded-md mt-2 px-10">Calcular</button>  
                    <p className="mt-3 text-amber-500">Resultado: {imc?.toFixed(2)}</p>
            </div>
          
                <TabelaImc imc={imc}/>
            </div> 
           
        </>
    )
}