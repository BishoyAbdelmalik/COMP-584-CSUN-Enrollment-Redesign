import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Signup from "../components/Signup";
import { selectStatus } from "../reducers/profileSlice";

export const SignUpRoute = () => {
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    useEffect(() => {
        if (status === 'logged-in') {
            navigate("/", { replace: true });
        }
    }, [status, navigate]);
    return (<Signup />);
}

