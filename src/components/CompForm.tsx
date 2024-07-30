
interface CompFormProps{
    label:string,
    state: any,
    funcState: any
}
export default function compForm(props: CompFormProps){
    return(
        <>
        
        <div>
            <label >{props.label}</label>
            <input value={props.state} onChange={(evt)=>{props.funcState(evt.target.value)} } />


        </div>
        
        </>
    )
}