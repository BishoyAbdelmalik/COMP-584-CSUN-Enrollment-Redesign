export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
export const URL_CSUN_API_TERM = "https://api.metalab.csun.edu/curriculum/api/2.0/terms/";
export const URL_CSUN_API = "https://api.metalab.csun.edu/curriculum/api/2.0/";
export const URL_CSUN_API_DIRECTORY = "https://api.metalab.csun.edu/directory/api/members?email=";
export const SORTING_OPTIONS = [
    {
        value: "section",
        text: "Section Number"
    },
    {
        value: "type",
        text: "Location"
    },
    {
        value: "time",
        text: "Time Slot"
    },
    {
        value: "enrollment",
        text: "Seats Left"
    },
    {
        value: "waitlist",
        text: "Wait-list Number"
    }
];