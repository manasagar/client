import NoteContext from "./contextnote"
const NoteState=(props)=>{
    return(
        <NoteContext.provider>
        {props.children}
        </NoteContext.provider>
    )
}
export default NoteState;