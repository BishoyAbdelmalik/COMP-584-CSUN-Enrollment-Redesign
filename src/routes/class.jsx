import { useParams } from "react-router-dom"

export const Class = () =>{
    const {id}=useParams();
    return (<p>{id}</p>)
}