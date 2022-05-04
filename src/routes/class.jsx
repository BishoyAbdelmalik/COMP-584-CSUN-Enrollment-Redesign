import { useParams } from "react-router-dom"
import { getClasses } from "../api/utils";

export const Class = () =>{
    const {id}=useParams();
    getClasses(id).then((data)=>{console.log(data)});
    return (<p>{id}</p>)
}