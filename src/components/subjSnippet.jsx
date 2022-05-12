import { Link } from "react-router-dom";

const SubjSnippet = ({ subj }) => {
    // console.log(subj)
    return (
        <div>
            {subj.map((element, index) => (
                <div key={index} eventKey={index}>
                    <Link to={`/class/${element.subject}-${element.catalog_number}`}>
                        <h2>{element.subject}-{element.catalog_number} {element.title}</h2>
                    </Link>
                    {element.description && <p>{element.description.substring(0, 230)}...</p>}
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default SubjSnippet;