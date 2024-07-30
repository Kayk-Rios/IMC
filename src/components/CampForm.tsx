
interface CampFormProps{
    label:string,
    state: any,
    funcState: any
}
export default function CampForm(props: CampFormProps){
    return(
        <>
        
        <div className="flex flex-col ">
            <label className="rounded-md m-5" >{props.label}</label>
            <input className="bg-slate-600 rounded-md" value={props.state} onChange={(evt)=>{props.funcState(evt.target.value)} } />


        </div>
        
        </>
    )
}