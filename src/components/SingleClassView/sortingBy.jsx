import classNames from "classnames";
import { Form } from "react-bootstrap";
import style from "./classPage.module.scss"

const SortBy = ({ onChange, defaultValue, options }) => {
    return (
        <div className={classNames("d-flex", "align-items-center", "w-50")}>
            <p className={classNames("w-50", "m-0", style.textRight, "p-2")}>Sort by:</p>
            <Form.Select aria-label="Default select" defaultValue={defaultValue} onChange={({ target }) => {
                onChange(target.value);
            }}>
                {options.map((o, index) => (
                    <option key={index} value={o.value}>{o.text}</option>
                ))}
            </Form.Select>
        </div>
    );
}

export default SortBy;