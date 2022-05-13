import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Delay = ({children}) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 300);

        return () => clearTimeout(timeout)

    }, [show])


    return (
        <>
            {!show ?
                <Spinner animation="border" /> :
                children
            }
        </>
    );
}

export default Delay;