import { URL_CSUN_API, URL_CSUN_API_TERM } from "../constants/userConstants";

export const getGEClasses = () => {
    return fetch("/ge_categories.json").then(response => response.json())
        .then(data => (data))
        .catch(err => console.error(err));
}

const getAPIURLTerm = (id,term) => {
    return `${URL_CSUN_API_TERM}${term}/classes/${id}`
}
const getAPIURL = (id) => {
    return `${URL_CSUN_API}/classes/${id}`
}

const getTerm = (date=new Date()) =>{
    const year=date.getFullYear();
    const month = date.getMonth()
    let semester = "Fall";
    if(month>=8 && month<12){
        semester = "Fall";
    }else if(month>=1 && month<=5){
        semester="Spring";
    }else if(month>5 && month<=8){
        semester = "Summer"
    }
    return `${semester}-${year}`;
}

export const getClasses = (id) =>{
    return fetch(getAPIURLTerm(id,getTerm())).then(response => response.json())
    .then(data => data.classes)
    .catch(err => console.error(err));
}
export const getMainSubject = () =>("comp");