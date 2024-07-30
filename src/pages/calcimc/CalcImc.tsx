import CompForm from "@/components/CompForm"
import TabelaImc from "@/components/TabelaImc"
import { useState } from "react"

export default function CalcImc(){
    const [autu, setAutu] = useState<number>(0)
    const [peso, setPeso] = useState<number>(0)
    const [imc, setImc] = useState<number>(0)
    function calcular (){
       
       let res = peso/(autu*autu)
        setImc(res)
    }

    return(
        <>
           <div>
            <p>Calculo do IMC</p>
            <CompForm label="Peso " state={peso} funcState={setPeso}/>
            <CompForm label="Altura" state={autu} funcState={setAutu}/>
            <button onClick={calcular}>Calcular</button>
            <p>Resultado: {imc}</p>
            <TabelaImc/>
            </div> 
        
        </>
    )
}