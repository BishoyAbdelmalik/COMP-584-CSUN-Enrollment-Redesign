import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubjSnippet = ({ subj }) => {
    if(subj.length === 0){
        return <Spinner animation="border" />;
    }
    return (
        <>
            {subj.map((element, index) => (
                <div key={index}>
                    <Link to={`/class/${element.subject}-${element.catalog_number}`}>
                        <h2>{element.subject}-{element.catalog_number} {element.title}</h2>
                    </Link>
                    {element.description && <p>{element.description.substring(0, 230)}...</p>}
                    <hr />
                </div>
            ))}
        </>
    );
}

export default SubjSnippet;