import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getClasses } from "../api/utils";

export const Class = () =>{
    const {id}=useParams();
    const [sections,setSections]=useState([]);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [number,setNumber]=useState(id.toUpperCase());
    const [units,setUnits]=useState(0);
    if(sections.length===0){
        getClasses(id).then((d)=>(setSections(d)));
    }
    useEffect(()=>{
        if(sections.length>0){
            setTitle(sections[0].title);
            setNumber(`${sections[0].subject}-${sections[0].catalog_number}`);
            setUnits(sections[0].units);
            setDescription(sections[0].description);
        }
        console.log(sections);
    },[sections])
    return (<p>{id}</p>)
}