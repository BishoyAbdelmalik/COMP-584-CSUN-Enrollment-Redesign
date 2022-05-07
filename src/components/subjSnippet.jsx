const SubjSnippet = ({subj}) => {
    // console.log(subj)
    return (
        <div>
            {subj.map((element, index) => (
                <div key={index} eventKey={index}>
                    <h2>{element.subject}-{element.catalog_number} {element.title}</h2>
                    {element.description&&<p>{element.description}</p>}
                </div>
            ))}
        </div>
    );
}

export default SubjSnippet;