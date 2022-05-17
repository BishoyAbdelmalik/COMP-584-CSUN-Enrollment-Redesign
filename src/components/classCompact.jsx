import classNames from "classnames";
import { Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import appStyles from './../App.module.scss';
import style from './classCompact.module.scss'
import { FaFolder } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";

const ClassCompact = ({ id, title, units, dropDown, openModal, unbookmark }) => {
    const [show, setShow] = dropDown;
    return (
        <div className={classNames(appStyles.grid, style.grid, "position-relative")}>
            <p className="m-0"><span className="h5">{id}</span> <span>({units})</span></p>
            <p className={classNames("m-0", "text-muted")}>{title}</p>

            <BsThreeDotsVertical className={classNames(style.dots, { [style.selected]: show === id })} onClick={({ target }) => {
                if (show === id) {
                    setShow("");
                } else {
                    setShow(id);
                }
            }} />
            <Dropdown.Menu show={show === id} align={{ sm: "end" }}>
                <Dropdown.Item href="#" onClick={() => openModal()} className="d-flex align-items-center"><FaFolder size={20} /><span className="m-1">Set Category</span></Dropdown.Item>
                <Dropdown.Item href="#" onClick={()=> unbookmark({id, title, units})} className="d-flex align-items-center"><BsXCircle size={20} /><span className="m-1">Unbookmark</span></Dropdown.Item>
            </Dropdown.Menu>
        </div>
    );
}

export default ClassCompact;