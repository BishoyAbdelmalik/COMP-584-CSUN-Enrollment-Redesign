
export const getGEClasses = () =>{
    return fetch("/ge_categories.json").then(response => response.json())
    .then(data => (data))
    .catch(err => console.error(err));
}