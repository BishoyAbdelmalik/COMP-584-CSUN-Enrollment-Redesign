import { URL_CSUN_API, URL_CSUN_API_DIRECTORY, URL_CSUN_API_TERM } from "../constants/userConstants";

export const getGEClasses = () => {
    return fetch("/ge_categories.json").then(response => response.json())
        .then(data => (data))
        .catch(err => console.error(err));
}

const getAPIURLTerm = (id, term) => {
    return `${URL_CSUN_API_TERM}${term}/classes/${id}`
}
const getAPIURL = (id) => {
    return `${URL_CSUN_API}/classes/${id}`
}

const getTerm = (date = new Date()) => {
    const year = date.getFullYear();
    const month = date.getMonth()
    let semester = "Fall";
    if (month >= 8 && month < 12) {
        semester = "Fall";
    } else if (month >= 1 && month <= 5) {
        semester = "Spring";
    } else if (month > 5 && month <= 8) {
        semester = "Summer"
    }
    return `${semester}-${year}`;
}

export const getClasses = (id) => {
    return fetch(getAPIURLTerm(id, getTerm())).then(response => response.json())
        .then(data => data.classes)
        .catch(err => console.error(err));
}
export const getTeacherName = (email) => {
    return fetch(`${URL_CSUN_API_DIRECTORY}${email}`).then(response => response.json())
        .then(data => {
            if (data.status === "200" && data.people.display_name !== undefined) {
                return data.people.display_name;
            }
            if(email.includes("@my.csun.edu")){
                let getEmailAddress = email.split('.');
                const capFirstLetter = (str) => {return str.charAt(0).toUpperCase() + str.slice(1);}
                let constructDisplayName = `${capFirstLetter(getEmailAddress[0])} ${capFirstLetter(getEmailAddress[1])}`;
                return constructDisplayName;
            }
            return email
        })
        .catch(err => console.error(err));
}

export const getMainSubject = (uuid) => ("comp");

export const convertTime = (time) => {
    time = time.slice(0, -1);
    let hours = parseInt(time.substring(0, 2));
    let minute = parseInt(time.slice(2));
    let convertedHours = ((hours + 11) % 12 + 1);
    let amPM = (hours>=12)?"PM":"AM";
    return `${convertedHours.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${amPM}`;
}