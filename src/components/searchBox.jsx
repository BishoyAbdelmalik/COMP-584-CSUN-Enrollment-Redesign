import classNames from "classnames";
import { Form } from "react-bootstrap";


const SearchBox = ({onSearch}) => {
    return (
        <>
            <Form className={classNames("d-flex", "flex-column", "mx-auto")}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className="rounded-0"
                        onChange={({ target }) => {
                            onSearch(target.value);
                        }}
                    />
                </Form.Group>
            </Form>
        </>
    );
}

export default SearchBox;