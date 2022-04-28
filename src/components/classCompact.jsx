import classNames from "classnames";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import appStyles from './../App.module.scss';
import style from './classCompact.module.scss'

const ClassCompact = ({ id, name, units }) => {
    const [show, setShow] = useState(false);
    return (
        <div className={classNames(appStyles.grid, style.grid, "position-relative")}>
            <p className="m-0"><span className="h5">{id}</span> <span>({units})</span></p>
            <p className={classNames("m-0", "text-muted")}>{name}</p>

            <BsThreeDotsVertical className={style.dots} onClick={({ target }) => { 
                target.classList.toggle(style.selected);
                setShow(!show); 
            }} />
            <Dropdown.Menu xp show={show} align={{ sm: "end" }}>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </div>
    );
}

export default ClassCompact;